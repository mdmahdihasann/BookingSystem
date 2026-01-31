"use client"
import React, { useState } from 'react';
import Logo from "../../../../public/Logo.png"

import { RxDashboard } from "react-icons/rx";
import { RiShipLine } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { TbUsersGroup } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Image from 'next/image';
import Profile from '@/components/dashboard/ui/Profile';
import Link from 'next/link';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem(<Link href="/admin/dashboard">Dashboard</Link>, '1', <RxDashboard />),
    getItem(<Link href="/admin/launches">Launches</Link>, '2', <RiShipLine />),
    getItem(<Link href="/admin/bookings">Bookings</Link>, '3', <TbBrandBooking />),
    getItem(<Link href="/admin/customers">Customers</Link>, '4', <LuUserRound />),
    getItem(<Link href="/admin/payments">Payments</Link>, '5', <MdOutlinePayments />),
    getItem(<Link href="/admin/reports">Reports</Link>, '6', <TbReportSearch />),
    getItem(<Link href="/admin/staff">Staff</Link>, '7', <TbUsersGroup />),
    getItem(<Link href="/admin/settings">Settings</Link>, '8', <IoSettingsOutline />),
];

const AdminLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="demo-logo-vertical flex felx-col justify-center py-3" ><Image src={Logo} width={90} alt='lunch' /></div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <div className='flex items-center justify-end mt-2 mr-2'>
                        <Profile />
                    </div>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }, { title: 'Bill' }]} />
                    <div
                        style={{
                            padding: 16,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Design & Developments ©{new Date().getFullYear()} Created by Sojibe
                </Footer>
            </Layout>
        </Layout>
    );
};
export default AdminLayout;