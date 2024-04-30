import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Drawer, Layout, Menu } from 'antd';

import { useAppContext } from '@/context/appContext';

import useLanguage from '@/locale/useLanguage';
import logoIcon from '@/style/images/logo-icon.png';
// import logoIcon from '@/style/images/logo-icon.svg';
// import logoText from '@/style/images/logo-text.svg';

import useResponsive from '@/hooks/useResponsive';

import {
  SettingOutlined,
  CustomerServiceOutlined,
  ContainerOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TagOutlined,
  TagsOutlined,
  UserOutlined,
  CreditCardOutlined,
  MenuOutlined,
  FileOutlined,
  ShopOutlined,
  FilterOutlined,
  WalletOutlined,
  ReconciliationOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectLangDirection } from '@/redux/translate/selectors';

const { Sider } = Layout;

export default function Navigation() {
  const { isMobile } = useResponsive();

  return isMobile ? <MobileSidebar /> : <Sidebar collapsible={false} />;
}

function Sidebar({ collapsible, isMobile = false }) {
  let location = useLocation();

  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);
  const [currentPath, setCurrentPath] = useState(location.pathname.slice(1));

  const translate = useLanguage();
  const navigate = useNavigate();

  const items = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: <Link to={'/'}>{translate('dashboard')}</Link>,
    },
    {
      key: 'customer',
      icon: <CustomerServiceOutlined />,
      label: <Link to={'/clients'}>Clients</Link>,
    },
    {
      key: 'company',
      icon: <ShopOutlined />,
      label: <Link to={'/company'}>{translate('companies')}</Link>,
    },
    {
      key: 'lead',
      icon: <FilterOutlined />,
      label: <Link to={'/lead'}>{translate('leads')}</Link>,
    },
    {
      key: 'offer',
      icon: <FileOutlined />,
      label: <Link to={'/offer'}>{translate('offers')}</Link>,
    },
    {
      key: 'invoice',
      icon: <ContainerOutlined />,
      label: <Link to={'/invoice'}>{translate('invoices')}</Link>,
    },
    {
      key: 'quote',
      icon: <FileSyncOutlined />,
      label: <Link to={'/quote'}>Proforma Inv</Link>,
    },
    {
      key: 'payment',
      icon: <CreditCardOutlined />,
      label: <Link to={'/payment'}>{translate('payments')}</Link>,
    },

    {
      key: 'paymentMode',
      icon: <CreditCardOutlined />,
      label: <Link to={'/payment/mode'}>{translate('payments_mode')}</Link>,
    },

    {
      key: 'product',
      icon: <TagOutlined />,
      label: <Link to={'/product'}>{translate('products')}</Link>,
    },
    {
      key: 'categoryproduct',
      icon: <TagsOutlined />,
      label: <Link to={'/category/product'}>Produ Cat</Link>,
    },
    {
      key: 'produk',
      icon: <TagOutlined />,
      label: <Link to={'/produk'}>Produk</Link>,
    },
    {
      key: 'categoryproduk',
      icon: <TagsOutlined />,
      label: <Link to={'/categoryproduk'}>ProdukDog</Link>,
    },

    // {
    //   key: 'appointments',
    //   icon: <WalletOutlined />,
    //   label: <Link to={'/appointments'}>Appointments</Link>,
    // },
    // {
    //   key: 'patients',
    //   icon: <WalletOutlined />,
    //   label: <Link to={'/patients'}>Patients</Link>,
    // },
    // {
    //   key: 'requestor',
    //   icon: <CreditCardOutlined />,
    //   label: <Link to={'/requestor'}>Requestor</Link>,
    // },

    {
      key: 'appointments',
      icon: <UserOutlined />,
      label: <Link to={'/appointments'}>Appointments</Link>,
    },
    {
      key: 'events',
      icon: <UserOutlined />,
      label: <Link to={'/events'}>Events</Link>,
    },
    {
      key: 'requestors',
      icon: <UserOutlined />,
      label: <Link to={'/requestors'}>Requestors</Link>,
    },
    {
      key: 'employees',
      icon: <UserOutlined />,
      label: <Link to={'/employees'}>Employees</Link>,
    },
    {
      key: 'user-management',
      icon: <UserOutlined />,
      label: <Link to={'/user-management'}>User Management</Link>,
    },

    {
      label: 'General Settings',
      key: 'settings',
      icon: <SettingOutlined />,
      children: [
        {
          key: 'generalSettings',
          label: <Link to={'/settings'}>{translate('settings')}</Link>,
        },
        {
          key: 'profile',
          label: <Link to={'/profile'}>Profile</Link>,
        },
      ],
    },
  ];

  useEffect(() => {
    if (location)
      if (currentPath !== location.pathname) {
        if (location.pathname === '/') {
          setCurrentPath('dashboard');
        } else setCurrentPath(location.pathname.slice(1));
      }
  }, [location, currentPath]);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  const langDirection = useSelector(selectLangDirection);
  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsible ? isNavMenuClose : collapsible}
      onCollapse={onCollapse}
      className="navigation"
      width={256}
      style={{
        // overflowX: 'hidden',
        height: '100vh',
        direction: langDirection,
        position: isMobile ? 'absolute' : 'relative',
        bottom: '20px',
        ...(!isMobile && {
          background: 'none',
          border: 'none',
          [langDirection === 'rtl' ? 'right' : 'left']: '20px',
          top: '20px',
          borderRadius: '8px',
        }),
      }}
      theme={'light'}
    >
      <div
        className="logo"
        onClick={() => navigate('/')}
        style={{
          cursor: 'pointer',
        }}
      >
        <img src={logoIcon} alt="Logo" style={{ marginLeft: '-3px', height: '40px' }} />

        {/* {!showLogoApp && (
          <img
            src={logoText}
            alt="Logo"
            style={{
              marginTop: '3px',
              marginLeft: '10px',
              height: '38px',
            }}
          />
        )} */}
        <h2>CTS Logo</h2>
      </div>
      <Menu
        items={items}
        mode="inline"
        theme={'light'}
        selectedKeys={[currentPath]}
        style={{
          background: 'none',
          border: 'none',
          width: 240,
        }}
      />
    </Sider>
  );
}

function MobileSidebar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const langDirection = useSelector(selectLangDirection);
  return (
    <>
      <Button
        type="text"
        size="large"
        onClick={showDrawer}
        className="mobile-sidebar-btn"
        style={{ [langDirection === 'rtl' ? 'marginRight' : 'marginLeft']: 25 }}
      >
        <MenuOutlined style={{ fontSize: 18 }} />
      </Button>
      <Drawer
        width={250}
        contentWrapperStyle={{
          boxShadow: 'none',
        }}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
        placement={langDirection === 'rtl' ? 'right' : 'left'}
        closable={false}
        onClose={onClose}
        open={visible}
      >
        <Sidebar collapsible={false} isMobile={true} />
      </Drawer>
    </>
  );
}
