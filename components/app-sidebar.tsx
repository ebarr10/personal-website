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
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarRail,
    useSidebar,
} from "@/components/ui/sidebar";

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
                url: "/projects/misc/",
            },
        ],
    },
    {
        title: "Notes",
        url: "/notes/",
        icon: Pencil,
        items: [
            {
                title: "Developer Notes",
                url: "/notes/developer/",
            },
            {
                title: "Chinese Learning",
                url: "/notes/chinese/",
            },
            {
                title: "Cooking Experiments",
                url: "/notes/cooking/",
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
                url: "/about/learn/",
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
            <SidebarFooter>
                <FooterContent />
            </SidebarFooter>
        </Sidebar>
    );
}

function FooterContent() {
    const { state } = useSidebar(); // "expanded" | "collapsed"

    if (state === "collapsed") return null;

    return (
        <div className="px-2 py-3 text-xs text-slate-500 leading-snug">
            <div>© {new Date().getFullYear()} Ethan</div>
            <div className="opacity-70">Projects, experiments, learnings</div>
        </div>
    );
}
