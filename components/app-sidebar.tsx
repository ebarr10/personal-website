"use client";

import * as React from "react";
import {
    BadgeQuestionMark,
    Briefcase,
    Home,
    Pencil,
    SquareChartGantt,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

const data = [
    {
        title: "Home",
        url: "/",
        icon: Home,
        items: [],
    },
    {
        title: "Work",
        url: "/work/",
        icon: Briefcase,
        items: [
            {
                title: "Foreman",
                url: "/work/foreman/",
            },
        ],
    },
    {
        title: "Projects",
        url: "/projects/",
        icon: SquareChartGantt,
        items: [
            {
                title: "ChangeLogScribe",
                url: "/projects/changelogscribe/",
            },
            {
                title: "Clothing Store Prototype",
                url: "/projects/clothing-store/",
            },
            {
                title: "Cooking Club",
                url: "/projects/cooking-club/",
            },
            {
                title: "Misc Projects",
                url: "/projects/misc-projects/",
            },
        ],
    },
    {
        title: "Writing",
        url: "/writing/",
        icon: Pencil,
        items: [
            {
                title: "Engineering Notes",
                url: "/writing/engineering-notes/",
            },
            {
                title: "Chinese Learning",
                url: "/writing/chinese-learning/",
            },
        ],
    },
    {
        title: "About",
        url: "/about/",
        icon: BadgeQuestionMark,
        items: [
            {
                title: "About Me",
                url: "/about/me/",
            },
            {
                title: "Where I Learn",
                url: "/about/where-i-learn/",
            },
        ],
    },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarContent>
                <NavMain items={data} />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
