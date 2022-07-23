import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { HTTP } from 'meteor/http';
import { Button, Spin } from 'antd';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import { Line } from '@ant-design/charts';
import { getMinMaxArray } from '../../../api/helpers';

export const fromTimeOptions = {
  ALL: 'ALL',
  YEAR: 'YEAR',
  MONTH: 'MONTH',
  WEEK: 'WEEK',
  DAY: 'DAY'
};

export const MyChart = (props) => {
  const [chartFromTime, setChartFromTime] = useState(fromTimeOptions.DAY);
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(false);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin/>;
  const getDateFormat = () => {
    if (chartFromTime === fromTimeOptions.DAY) {
      return 'MMM DD HH:mm';
    } else if (chartFromTime === fromTimeOptions.YEAR || chartFromTime === fromTimeOptions.ALL) {
      return 'MM/DD/YYYY';
    } else {
      return 'YYYY MMM DD HH:mm';
    }
  };

  const updateData = (data, dateName, valueName) => {
    // console.log(data, data[0][dateName], data[0][valueName]);
    // setHighchartData({
    //   title: { text: 'BTC/USD' },
    //   // options: {
    //   //   title: { text: 'BTC/USD' },
    //   // },
    //   xAxis: {
    //     categories: data.map(v => moment.unix(v[dateName])
    //       .local()
    //       .format(getDateFormat())) || [],
    //   },
    //   series: [{
    //     name: 'USD',
    //     data: data.map(v => v[valueName]) || [] //result?.data?.pairs['USD-BTC']?
    //   }]
    // });

    data = data.map(e => {
      return {
        // tmp: e[dateName],
        time: moment.unix(e[dateName])
          .local()
          .format(getDateFormat()),
        // time: new Date(Math.round(e[dateName] / 1000)),//moment.unix(e[dateName]).local().format(getDateFormat()),
        price: e[valueName],
      };
    });

    const minMax = getMinMaxArray(data),
      min = minMax.min,
      max = minMax.max;
    // console.log(min, max, data);

    setChartData({
      data,
      xField: 'time',
      yField: 'price',
      yAxis: {
        // type: 'time-pretty',
        min,
        max
      },
    });

    // for (let i = 0; i < Highcharts.charts.length; i++) {
    //   if (Highcharts.charts[i] !== undefined) {
    //     Highcharts.charts[i].reflow();
    //   }
    // }
  };

  useEffect(() => {
    let mounted = true;
    const now = Date.now();
    let fromTime = now;
    let scale = 7200;
    switch (chartFromTime) {
      case fromTimeOptions.ALL:
        fromTime = now - (1000 * 60 * 60 * 24 * 365 * 10);
        // scale = 14400;
        break;
      case fromTimeOptions.YEAR:
        fromTime = now - (1000 * 60 * 60 * 24 * 365);
        // scale = 7200;
        break;
      case fromTimeOptions.MONTH:
        fromTime = now - (1000 * 60 * 60 * 24 * 30);
        // scale = 3600;
        break;
      case fromTimeOptions.WEEK:
        // scale = 7200;
        fromTime = now - (1000 * 60 * 60 * 24 * 7);
        break;
      case fromTimeOptions.DAY:
        // scale = 7200;
        fromTime = now - (1000 * 60 * 60 * 40);
        break;
    }
    //console.log(fromTime, now, chartFromTime);

    // message.loading("...Loading");

    setLoading(true); //time value, timestamp price
    // HTTP.call('GET', 'https://api.blockchain.info/price-historic/prices', {
    //   https://api.blockchain.info/price/index-series?base=BTC&quote=USD&start=1620075600&scale=7200&cors=true
    //   HTTP.call('GET', 'https://api.blockchain.info/charts/market-price?sampled=true&metadata=false&cors=true&format=json', {
    let url,
      params,
      dateName,
      valueName,
      isLarge = false;
    if (chartFromTime === fromTimeOptions.ALL || chartFromTime === fromTimeOptions.YEAR) {
      url = 'https://api.blockchain.info/price-historic/prices';
      isLarge = true;
      dateName = 'time';
      valueName = 'value';
      params = {
        coins: 'BTC', //coins
        fiat: 'USD', //fiat
        fromTime: Math.round(fromTime / 1000), //fromTime Math.round(fromTime / 1000)
        toTime: Math.round(now / 1000),
      };
    } else {
      dateName = 'timestamp';
      valueName = 'price';
      url = 'https://api.blockchain.info/price/index-series?cors=true&scale=7200';
      params = {
        base: 'BTC', //coins
        quote: 'USD', //fiat
        start: Math.round(fromTime / 1000), //fromTime Math.round(fromTime / 1000)
        // toTime: Math.round(now / 1000),
      };
    }
    HTTP.call('GET', url, {
      params,
    }, (error, result) => {
      setLoading(false);
      if (mounted) {
        if (!error) {
          let data = isLarge ? result?.data?.pairs['USD-BTC'] : result?.data;
          if (Array.isArray(data)) {
            if (data.length > 50) {
              const ind = parseInt(data.length / 50, 10);
              data = data?.filter((t, index) => {
                return index % ind === 0;
              });
            }
            updateData(data, dateName, valueName);
          }
        }
      }
    });

    return () => {
      mounted = false;
    };
  }, [chartFromTime]);

  return (
    <>
      <div>
        <Button onClick={() => {
          setChartFromTime(fromTimeOptions.ALL);
        }} className="chartButton"
                type={chartFromTime === fromTimeOptions.ALL ? 'primary' : 'default'}>
          {fromTimeOptions.ALL}
        </Button>
        <Button onClick={() => {
          setChartFromTime(fromTimeOptions.YEAR);
        }} className="chartButton"
                type={chartFromTime === fromTimeOptions.YEAR ? 'primary' : 'default'}>
          {fromTimeOptions.YEAR}
        </Button>
        <Button onClick={() => {
          setChartFromTime(fromTimeOptions.MONTH);
        }} className="chartButton"
                type={chartFromTime === fromTimeOptions.MONTH ? 'primary' : 'default'}>
          {fromTimeOptions.MONTH}
        </Button>
        <Button onClick={() => {
          setChartFromTime(fromTimeOptions.WEEK);
        }} className="chartButton"
                type={chartFromTime === fromTimeOptions.WEEK ? 'primary' : 'default'}>
          {fromTimeOptions.WEEK}
        </Button>
        <Button onClick={() => {
          setChartFromTime(fromTimeOptions.DAY);
        }} className="chartButton"
                type={chartFromTime === fromTimeOptions.DAY ? 'primary' : 'default'}>
          {fromTimeOptions.DAY}
        </Button>
        {loading && <Spin indicator={antIcon} style={{ paddingLeft: '1em' }}/>}
      </div>
      <div style={{
        width: '98%',
        paddingTop: '3em'
      }}>
        {chartData && chartData.data && <Line autoFit={true}
          {...chartData}
        />}
        {/*<HighchartsReact*/}
        {/*  highcharts={Highcharts}*/}
        {/*  options={highchartData}*/}
        {/*/>*/}
      </div>
    </>
  );
};

