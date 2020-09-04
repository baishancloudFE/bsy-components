import React, { useMemo } from 'react';
import { MapboxScene, PointLayer, PolygonLayer, LineLayer } from '@antv/l7-react';
// eslint-disable-next-line import/no-named-default
import { default as geo } from './chinaGeo.json';

type ColorOptions = {
  background: string;
  active: string;
  line: string;
  label: string;
  values: string[];
};

interface ChinaMapProps {
  width?: string | number;
  height?: string | number;
  interactive?: boolean;
  colors?: ColorOptions;
  data: Array<{ name: string; value: number }>;
}

const ChinaMap: React.FC<ChinaMapProps> = (props) => {
  const { width = '100%', height = 500, interactive = false, data: dataSource = [] } = props;

  const colors = useMemo(
    () =>
      Object.assign(props.colors || {}, {
        background: '#FFF',
        active: '#ffffb8',
        line: '#FFF',
        label: '#0C2C82',
        values: ['#EEE', '#1890FF'],
      }),
    [props.colors],
  );

  const data = useMemo(() => {
    return {
      type: 'FeatureCollection',
      features: geo.map((item) => {
        let value = 0;
        const dataItem = dataSource.find((v) => item.properties.name.includes(v.name));
        if (dataItem) {
          value = dataItem.value;
        }
        return {
          ...item,
          properties: {
            ...item.properties,
            value,
          },
        };
      }),
    };
  }, [dataSource]);

  const pointData = useMemo(() => {
    return geo
      .map((item) => ({
        name: item.properties.name.replace(/(市|省)/g, ''),
        center: item.properties.center,
      }))
      .filter((item) => !!item.name);
  }, []);

  return (
    <div style={{ position: 'relative', width, height }}>
      <MapboxScene
        map={{
          center: [116.2825, 39.9],
          pitch: 0,
          style: 'blank',
          zoom: 12,
          interactive,
        }}
        style={{
          position: 'absolute',
          background: colors.background,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {data && [
          <PolygonLayer
            key="1"
            options={{ autoFit: true }}
            source={{ data }}
            shape={{ values: 'fill' }}
            style={{ opacity: 1 }}
            scale={{
              values: {
                confirmedCount: { type: 'quantile' },
              },
            }}
            active={{
              option: { color: colors.active },
            }}
            color={{
              field: 'value',
              values: colors.values,
            }}
          />,
          <LineLayer
            key="2"
            source={{ data }}
            size={{ values: 0.6 }}
            color={{ values: colors.line }}
            shape={{ values: 'line' }}
            style={{ opacity: 1 }}
          />,
          pointData && (
            <PointLayer
              key="3"
              color={{ values: colors.label }}
              size={{ values: 12 }}
              shape={{ field: 'name', values: 'text' }}
              source={{
                data: pointData,
                parser: {
                  type: 'json',
                  coordinates: 'center',
                },
              }}
            />
          ),
        ]}
      </MapboxScene>
    </div>
  );
};

export default ChinaMap;
