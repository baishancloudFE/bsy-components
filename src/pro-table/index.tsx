import React, { useCallback, useContext, useEffect, useMemo, useReducer, useRef } from 'react';
import { Alert, Card, Divider, Row, Table } from 'antd';
import { FilterColumnsModalRef, ProTableProps, SearchField } from './interface';
import { Context, initialState, reducer } from './store';
import ActionGroup from './ActionGroup';
import FilterColumnsModal from './FilterColumnsModal';
import FilterForm from './FilterForm';

const ProTable = <T extends {}, U extends object>(props: ProTableProps<T, U>) => {
  // 用来控制全屏
  const rootRef = useRef<HTMLDivElement>(null);
  // 用来控制筛选显示列
  const modalRef = useRef<FilterColumnsModalRef>(null);

  const { state, dispatch } = useContext(Context);

  const {
    columns,
    statistic,
    defaultHideColumns,
    onSearch,
    onFilterColumnsChange,
    ...rest
  } = props;

  const onFilterSubmit = useCallback(
    (data?: any[] | { [key: string]: any }) => {
      // dataSource不存在直接返回
      if (!data || !props.dataSource) {
        return;
      }
      // 如果onSearch是方法则返回
      if (typeof onSearch === 'function') {
        onSearch(data);
        return;
      }
      // 长度与当前数据相同直接返回
      if (Array.isArray(data) && data.length === state.filterDataSource.length) {
        return;
      }

      dispatch({
        type: 'set-data-source',
        payload: data,
      });
    },
    [dispatch, onSearch, props.dataSource, state.filterDataSource.length],
  );

  const proColumns = useMemo(() => {
    const { hides } = state;
    return columns.filter((item) => !hides.includes(item.dataIndex));
  }, [columns, state]);

  const searchFields = useMemo(() => {
    return columns
      .filter((item) => !!item.search)
      .map((item) => {
        const option: SearchField = { label: item.title, name: item.dataIndex };
        if (item.search !== null && typeof item.search === 'object') {
          option.config = item.search;
        }
        return option;
      });
  }, [columns]);

  useEffect(() => {
    dispatch({
      type: 'init-column',
      payload: {
        columns: columns.map((item) => ({ key: item.dataIndex, title: item.title })),
        hides: defaultHideColumns,
      },
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch({
      type: 'set-data-source',
      payload: props.dataSource,
    });
  }, [dispatch, props.dataSource]);

  return (
    <div ref={rootRef} style={{ height: '100%' }}>
      <Card bordered={false} style={{ height: '100%' }}>
        <FilterForm
          calculate={typeof onSearch === 'function'}
          fields={searchFields}
          dataSource={props.dataSource}
          onSubmit={onFilterSubmit}
        />
        <Row align="middle" justify="space-between" style={{ marginBottom: 8 }}>
          {statistic && <Alert style={{ flex: '1 1 0%' }} type="info" message={statistic} />}
          <Divider style={{ height: 24 }} type="vertical" />
          <ActionGroup root={rootRef.current} modal={modalRef.current} />
        </Row>
        <Table<T> {...rest} columns={proColumns} dataSource={state.filterDataSource} />
        <FilterColumnsModal ref={modalRef} />
      </Card>
    </div>
  );
};

const Provider = <T, U extends { [key: string]: any } = {}>(props: ProTableProps<T, U>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return useMemo(
    () => (
      <Context.Provider value={{ state, dispatch }}>
        <ProTable {...props} />
      </Context.Provider>
    ),
    [state, props],
  );
};

Provider.defaultProps = {
  defaultHideColumns: [],
};

export default Provider;
