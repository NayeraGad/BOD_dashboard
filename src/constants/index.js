import {
  FaCheckCircle,
  FaClock,
  FaFile,
  FaListAlt,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";

export const baseState = {
  items: [],
  count: 0,
  item: null,
  isLoading: {},
  isError: {},
  error: {},
};

export const sidebarLinks = [
  {
    Icon: MdOutlineSpaceDashboard,
    label: "Dashboard",
    path: "/",
  },
  {
    Icon: FaUsers,
    label: "Users",
    path: "/users",
  },
  {
    Icon: FaFile,
    label: "Posts",
    path: "/posts",
  },
  {
    Icon: FaListAlt,
    label: "Todos",
    path: "/todos",
  },
];

export const dashboardCards = [
  {
    Icon: FaUsers,
    title: "Total Users",
    value: "usersCount",
    style: "text-primary",
  },
  {
    Icon: FaFile,
    title: "Total Posts",
    value: "postsCount",
    style: "text-accent dark:text-accent-dark",
  },
  {
    Icon: FaCheckCircle,
    title: "Completed Todos",
    value: "completedCount",
    style: "text-green-500",
  },
  {
    Icon: FaClock,
    title: "Pending Todos",
    value: "pendingCount",
    style: "text-gray-light dark:text-white",
  },
];

export const usersTable = [
  { field: "name", label: "Name" },
  { field: "username", label: "Username" },
  { field: "email", label: "Email" },
  { field: "company", label: "Company", render: (row) => row.company?.name },
];

export const postsTable = [
  { field: "user", label: "User" },
  { field: "title", label: "Title" },
  { field: "createdAt", label: "Date" },
  { field: "body", label: "Body" },
];

export const todosTable = [
  { field: "user", label: "User" },
  { field: "title", label: "title" },
  {
    field: "completed",
    label: "Status",
    render: (row) => (row.completed === false ? "pending" : "completed"),
  },
];

export const usersSearchFields = [
  "name",
  "username",
  "email",
  (row) => row.company?.name,
];

export const todosSearchField = [
  "user",
  "title",
  (row) => (row.completed === false ? "pending" : "completed"),
];

export const postsSearchField = ["user", "title", "createdAt"];

export const loginFormFields = [
  { name: "email", label: "Email", type: "email", required: true },
  { name: "password", label: "Password", type: "password", required: true },
];

export const userFormFields = (item = {}) => [
  { name: "name", label: "Name", type: "text", defaultValue: item.name },
  {
    name: "username",
    label: "Username",
    type: "text",
    defaultValue: item.username,
  },
  { name: "email", label: "Email", type: "email", defaultValue: item.email },
  {
    name: "website",
    label: "Website",
    type: "text",
    defaultValue: item.website,
  },
  { name: "phone", label: "Phone", type: "text", defaultValue: item.phone },
  {
    name: "company.name",
    label: "Company",
    type: "text",
    defaultValue: item.company?.name,
  },
];

export const todoFormFields = (item = {}) => [
  {
    name: "user",
    label: "User",
    type: "text",
    defaultValue: item.user,
    disabled: true,
  },
  { name: "title", label: "Title", type: "text", defaultValue: item.title },
  {
    name: "completed",
    label: "Completed",
    type: "checkbox",
    defaultValue: item.completed,
  },
];

export const postFormFields = (item = {}) => [
  {
    name: "user",
    label: "User",
    type: "text",
    defaultValue: item.user,
    disabled: true,
  },
  {
    name: "title",
    label: "Title",
    type: "text",
    required: true,
    defaultValue: item.title,
  },
  {
    name: "body",
    label: "Body",
    type: "textarea",
    required: true,
    defaultValue: item.body,
  },
];

export const COLORS = ["var(--color-primary)", "var(--color-accent-dark)"];
