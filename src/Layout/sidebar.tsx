"use client";

import {
  ArrowDown,
  Command,
  Dock,
  Home,
  Inbox,
  InboxIcon,
  Kanban,
  Search,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SideBarComponent() {
  return (
    <SideBar>
      <Top>
        <Team>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Team>
        {/* <User>
        <img src={"https://cdn.dribbble.com/users/3144264/screenshots/16214810/media/f56b58f439a122e206d61c9c315fea0f.png?resize=400x300&vertical=center"} alt='Team Logo' width={40} height={50} style={{borderRadius: "50%"}} />
        <ArrowDown />
        </User> */}
      </Top>
      <Middle>
        <Tab>
          <Home size={18} /> Home
        </Tab>
        <Tab>
          <InboxIcon size={18} /> Announcements
        </Tab>
        <Tab>
          <Search size={18} /> Meetings
        </Tab>
        <Tab>
          <Kanban size={18} /> Projects
        </Tab>
        <Tab>
          <Dock size={18} /> All Docs
        </Tab>
      </Middle>
    </SideBar>
  );
}

const SideBar = styled.div`
  width: 20%;
  height: 100vh;
  background-color: #242424;
  padding: 20px;
`;

const Middle = styled.div`
  border: "90px solid red";
`;

const Tab = styled.span`
  display: flex;
  color: #747474;
  align-items: center;
  gap: 10px;
  font-weight: 400;
  font-size: 1.3vw;
  margin-bottom: 10px;
`;

const User = styled.div`
  display: flex;
`;
const Top = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Team = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 1.5vw;
`;
