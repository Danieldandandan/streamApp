import {create } from "zustand"
import { Sidebar } from './../app/(browse)/_compoents/sidebar/index';

interface SidebarStore {
    collapsed: boolean;
    onExpand: ()=> void;
    onCollapse: ()=> void;
}

export const useSideBar = create<SidebarStore>((set) => ({
    collapsed: false,
    onExpand: ()=> set(()=> ({collapsed: false})),
    onCollapse: ()=> set(()=> ({collapsed: true})),
}))