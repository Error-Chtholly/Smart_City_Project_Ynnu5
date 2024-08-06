/* 出行人口hook */
import { ref } from 'vue'
export const useLeftTop = () => {
      const people_data = ref([
            { type: '汉阳区', value: 10000 },
            { type: '武昌区', value: 20000 },
            { type: '洪山区', value: 50000 },
            { type: '江夏区', value: 30000 },
            { type: '江岸区', value: 40000 },
            // { type: '江汉区', value: 35000 },
            // { type: '硚口区', value: 35000 },
            // { type: '青山区', value: 35000 },
      ]);
      let res = people_data.value.map((d) => ({ ...d, value: d.value + 2 }))
      people_data.value = res;
      //   setInterval(() => {
      //         // data.value.forEach(item => {
      //         //       item.value = item.value * Math.random()
      //         // })
      //         let res = people_data.value.map((d) => ({ ...d, value: d.value + 2 }))
      //         people_data.value = res;
      //   }, 1200);
      const green = '#00B96B';
      const yellow = '#fd7e14';
      const red = '#dc3545';
      const people_config = {

            xField: 'type',
            yField: 'value',
            seriesField: 'value',
            // data: people_data.value, // 数据 被plot.vue访问
            label: {
                  // 可手动配置 label 数据标签位置
                  position: 'top', // 'top', 'bottom', 'middle',
                  // 配置样式
                  style: {
                        fill: '#FFFFFF',
                        opacity: 0.6,
                  },
            },
            color: ({ value }) => {
                  if (value > 40000) {
                        return red;
                  } else if (value > 20000 && value < 40000) {
                        return yellow;
                  } else {
                        return green;
                  }
            },
            legend: false,
            height: 270,
      };
      return {
            people_config,
            people_data
      }
}