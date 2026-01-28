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
import { NavBasic } from "@/components/nav-basic";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

const data = {
    navBasic: [
        {
            name: "Home",
            url: "/",
            icon: Home,
        },
    ],
    navMain: [
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
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarContent>
                <NavBasic basic={data.navBasic} />
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
