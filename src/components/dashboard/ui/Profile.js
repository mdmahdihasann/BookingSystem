"use client"

import { DownOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Dropdown, Flex, Space } from 'antd';
import { createStyles } from 'antd-style';
import Image from 'next/image';
import Sojibe from "../../../../public/sojibe.webp";
import { logoutUser } from '@/lib/logout';
import { useRouter } from 'next/navigation'; // ✅ FIX

const useStyles = createStyles(({ token }) => ({
  root: {
    backgroundColor: token.colorFillAlter,
    border: `1px solid ${token.colorBorder}`,
    borderRadius: token.borderRadius,
  },
}));

const Profile = () => {
  const router = useRouter();
  const { styles } = useStyles();

  const handleLogout = async () => {
    await logoutUser();
    router.push("/");
  };

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
      label: (
        <span onClick={handleLogout}>
          Logout
        </span>
      ),
      icon: <LogoutOutlined />,
      danger: true,
    },
  ];

  const sharedProps = {
    menu: { items },
    placement: 'bottomLeft',
    classNames: { root: styles.root },
  };

  return (
    <Flex gap="middle" wrap="wrap">
      <Space size="large">
        <Dropdown {...sharedProps}>
          <Button>
            <Space>
              <div className='flex gap-2 items-center'>
                <Image src={Sojibe} width={36} height={36} className='rounded-full' alt='Sojibe' />
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