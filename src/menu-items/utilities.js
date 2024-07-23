// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'System Value',
  type: 'group',
  children: [
    // {
    //   id: 'util-typography',
    //   title: 'Typography',
    //   type: 'item',
    //   url: '/typography',
    //   icon: icons.FontSizeOutlined
    // },
    // {
    //   id: 'util-color',
    //   title: 'Color',
    //   type: 'item',
    //   url: '/color',
    //   icon: icons.BgColorsOutlined
    // },
    // {
    //   id: 'util-shadow',
    //   title: 'Shadow',
    //   type: 'item',
    //   url: '/shadow',
    //   icon: icons.BarcodeOutlined
    // },
    // {
    //   id: 'ant-icons',
    //   title: 'Ant Icons',
    //   type: 'item',
    //   url: '/icons/ant',
    //   icon: icons.AntDesignOutlined,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'company-e',
    //   title: 'Company Detail',
    //   type: 'item',
    //   url: '/dashboard/compnaydata',
    //   icon: icons.AntDesignOutlined,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'suppoet',
    //   title: 'Support Detail',
    //   type: 'item',
    //   url: '/dashboard/support',
    //   icon: icons.AntDesignOutlined,
    //   breadcrumbs: true
    // },
    {
      id: 'practice',
      title: 'Practice',
      type: 'item',
      url: '/dashboard/practice',
      icon: icons.AntDesignOutlined,
      breadcrumbs: true
    }
,

    {
      id: 'report',
      title: 'Report',
      type: 'item',
      url: '/dashboard/report',
      icon: icons.AntDesignOutlined,
      breadcrumbs: true
    },
    {
      id: 'user',
      title: 'Manage User',
      type: 'item',
      url: '/dashboard/manageuser',
      icon: icons.AntDesignOutlined,
      breadcrumbs: true
    },
    {
      id: 'bill',
      title: 'GenerateBill',
      type: 'item',
      url: '/dashboard/generatebill',
      icon: icons.AntDesignOutlined,
      breadcrumbs: true
    },
    
    {
      id: 'post',
      title: 'Post',
      type: 'item',
      url: '/dashboard/post',
      icon: icons.AntDesignOutlined,
      breadcrumbs: true
    },
    {
      id: 'order',
      title: 'Order',
      type: 'item',
      url: '/dashboard/order',
      icon: icons.AntDesignOutlined,
      breadcrumbs: true
    },
    {
      id: 'demonavbar',
      title: 'Demonavbar',
      type: 'item',
      url: '/dashboard/navbar',
      icon: icons.AntDesignOutlined,
      breadcrumbs: true
    },
    {
      id: 'generalquestion',
      title: 'General Question',
      type: 'item',
      url: '/dashboard/food',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false
    },
    {
      id: 'Callbackfunction',
      title: 'CallBack Function',
      type: 'item',
      url: '/dashboard/callback',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false
    },
    
  ]
};

export default utilities;
