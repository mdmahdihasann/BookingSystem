"use client"

import { DownOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Dropdown, Flex, Space } from 'antd';
import { createStyles } from 'antd-style';
import Image from 'next/image';
import Sojibe from "../../../../public/sojibe.webp";
import { logoutUser } from '@/lib/logout';



const useStyles = createStyles(({ token }) => ({
  root: {
    backgroundColor: token.colorFillAlter,
    border: `1px solid ${token.colorBorder}`,
    borderRadius: token.borderRadius,
  },
}));



async function logout() {
  await logoutUser();
}


const items = [
  {
    key: '1',
    label: 'Profile',
  },
  {
    key: '2',
    label: 'Settings',
    icon: <SettingOutlined />,
  },
  {
    type: 'divider',
  },
  {
    key: '3',
    label: <span onClick={logout}>Logout</span>,
    icon: <LogoutOutlined />,
    danger: true,
  },
];
const objectStyles = {
  root: {
    backgroundColor: '#ffffff',
    border: '1px solid #d9d9d9',
    borderRadius: '4px',
  },
  item: {
    padding: '8px 12px',
    fontSize: '14px',
  },
  itemTitle: {
    fontWeight: '500',
  },
  itemIcon: {
    color: '#1890ff',
    marginRight: '8px',
  },
  itemContent: {
    backgroundColor: 'transparent',
  },
};

const Profile = () => {
  const { styles } = useStyles();
  const sharedProps = {
    menu: { items },
    placement: 'bottomLeft',
    classNames: { root: styles.root },
  };
  return (
    <Flex gap="middle" wrap="wrap">
      <Space vertical size="large">
        <Dropdown {...sharedProps} styles={objectStyles}>
          <Button>
            <Space >
              <div className='flex gap-2 items-center'>
                <Image src={Sojibe} width={60} height={40} className='w-[36px] h-[36px] rounded-full' alt='Sojibe' />
                <span>Mahdi Hasan</span>
              </div>
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Space>
    </Flex>
  );
};
export default Profile;