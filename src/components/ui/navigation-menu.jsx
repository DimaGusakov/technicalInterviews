import React from 'react';
import { Link } from 'react-router';

const NavigationMenu = React.forwardRef((props, ref) => {
  return (
    <nav
      ref={ref}
      className="relative z-10 flex max-w-max flex-1 items-center justify-center"
      {...props}
    />
  );
});

const NavigationMenuList = React.forwardRef((props, ref) => {
  return (
    <ul
      ref={ref}
      className="group flex flex-1 list-none items-center justify-center space-x-1"
      {...props}
    />
  );
});

const NavigationMenuItem = React.forwardRef((props, ref) => {
  return (
    <li ref={ref} className="relative" {...props} />
  );
});

const NavigationMenuLink = React.forwardRef(({ active, children, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${active ? 'bg-accent text-accent-foreground' : ''}`}
      {...props}
    >
      {children}
    </Link>
  );
});

const NavigationMenuContent = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:w-auto"
      {...props}
    />
  );
});

const NavigationMenuTrigger = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
      {...props}
    >
      {children}
      <span className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180">
        ▼
      </span>
    </button>
  );
});

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger
}; 