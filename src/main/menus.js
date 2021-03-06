export const menus = [
  {
    title: '店铺管理',
    key: 'storeList',
    component: require('../storeManage/Container').default,
  },
  {
    title: '订单管理',
    key: 'sellOrders',
    component: require('../orderManage/Container').default,
  },
  {
    title: '快递单模板',
    key: 'printExpressTemplate',
    on: true,
    component: require('../orderManage/Container').default,
  },
  {
    title: '其他打印模板',
    key: 'printTemplate',
    on: true,
    component: require('../orderManage/Container').default,
  },
  {
    title: '物流管理',
    key: 'logisticsManage',
    component: require('../orderManage/Container').default,
  },
];

function getAllObject(arr) {
  let allObject = [];
  arr.forEach((obj) => {
    allObject.push({
      key: obj.key,
      title: obj.title,
      component: obj.component,
    });
    if (obj.children) {
      allObject = allObject.concat(getAllObject(obj.children));
    }
  });
  return allObject;
}

export function getTitle(key) {
  const allObject = getAllObject(menus);
  let title = '未知模块';
  for (const i in allObject) {
    if (allObject[i].key === key) {
      title = allObject[i].title;
      break;
    }
  }
  return title;
}

export function getComponent(key) {
  const allObject = getAllObject(menus);
  for (const i in allObject) {
    if (allObject[i].key === key) {
      return allObject[i].component;
    }
  }
  return null;
}

