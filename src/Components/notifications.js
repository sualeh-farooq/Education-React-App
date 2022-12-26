// import React, { useMemo } from 'react';
// // import './index.css';
// import {
//   RadiusBottomleftOutlined,
//   RadiusBottomrightOutlined,
//   RadiusUpleftOutlined,
//   RadiusUprightOutlined,
// } from '@ant-design/icons';
// import { Button, Divider, notification, Space } from 'antd';
// // import { NotificationPlacement } from 'antd/es/notification/interface';

// const Context = React.createContext({ name: 'Default' });

// const NotificationCheck= () => {
//   const [api, contextHolder] = notification.useNotification();

//   const openNotification = (placement) => {
//     api.info({
//       message: `Tutors ${placement}`,
//       description: <Context.Consumer>{({ name }) => `Tutors  ${name} !`}</Context.Consumer>,
//       placement,
//     });
//   };

//   const contextValue = useMemo(() => ({ name: 'Deleted' }), []);

//   return (
//     <Context.Provider value={contextValue}>
//       {contextHolder}
//       <Space>
//         <Button type="primary" onClick={() => openNotification('topLeft')}>
//           <RadiusUpleftOutlined />
//           topLeft
//         </Button>
//         <Button type="primary" onClick={() => openNotification('topRight')}>
//           <RadiusUprightOutlined />
//           topRight
//         </Button>
//       </Space>
//       <Divider />
//       <Space>
//         <Button type="primary" onClick={() => openNotification('bottomLeft')}>
//           <RadiusBottomleftOutlined />
//           bottomLeft
//         </Button>
//         <Button type="primary" onClick={() => openNotification('Deleted')}>
//           <RadiusBottomrightOutlined />
//           bottomRight
//         </Button>
//       </Space>
//     </Context.Provider>
//   );
// };

// export default NotificationCheck;