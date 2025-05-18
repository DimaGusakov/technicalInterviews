import React from 'react';

const Card = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="rounded-lg border bg-card text-card-foreground shadow-sm"
      {...props}
    />
  );
});

const CardHeader = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col space-y-1.5 p-6"
      {...props}
    />
  );
});

const CardTitle = React.forwardRef((props, ref) => {
  return (
    <h3
      ref={ref}
      className="text-2xl font-semibold leading-none tracking-tight"
      {...props}
    />
  );
});

const CardDescription = React.forwardRef((props, ref) => {
  return (
    <p
      ref={ref}
      className="text-sm text-muted-foreground"
      {...props}
    />
  );
});

const CardContent = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="p-6 pt-0"
      {...props}
    />
  );
});

const CardFooter = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex items-center p-6 pt-0"
      {...props}
    />
  );
});

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
}; 