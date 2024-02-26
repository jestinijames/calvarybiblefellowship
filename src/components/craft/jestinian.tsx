'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

interface BaseProps {
  children: React.ReactNode;
}

interface RootJestinianProps extends BaseProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface JestinianProps extends BaseProps {
  className?: string;
  asChild?: true;
}

const Jestinian = ({ children, ...props }: RootJestinianProps) => {
  const isMobile = useMediaQuery();
  const Jestinian = isMobile ? Drawer : Dialog;

  return <Jestinian {...props}>{children}</Jestinian>;
};

const JestinianTrigger = ({
  className,
  children,
  ...props
}: JestinianProps) => {
  const isMobile = useMediaQuery();
  const JestinianTrigger = isMobile ? DrawerTrigger : DialogTrigger;

  return (
    <JestinianTrigger className={className} {...props}>
      {children}
    </JestinianTrigger>
  );
};

const JestinianClose = ({ className, children, ...props }: JestinianProps) => {
  const isMobile = useMediaQuery();
  const JestinianClose = isMobile ? DrawerClose : DialogClose;

  return (
    <JestinianClose className={className} {...props}>
      {children}
    </JestinianClose>
  );
};

const JestinianContent = ({
  className,
  children,
  ...props
}: JestinianProps) => {
  const isMobile = useMediaQuery();
  const JestinianContent = isMobile ? DrawerContent : DialogContent;

  return (
    <JestinianContent className={className} {...props}>
      {children}
    </JestinianContent>
  );
};

const JestinianDescription = ({
  className,
  children,
  ...props
}: JestinianProps) => {
  const isMobile = useMediaQuery();
  const JestinianDescription = isMobile ? DrawerDescription : DialogDescription;

  return (
    <JestinianDescription className={className} {...props}>
      {children}
    </JestinianDescription>
  );
};

const JestinianHeader = ({ className, children, ...props }: JestinianProps) => {
  const isMobile = useMediaQuery();
  const JestinianHeader = isMobile ? DrawerHeader : DialogHeader;

  return (
    <JestinianHeader className={className} {...props}>
      {children}
    </JestinianHeader>
  );
};

const JestinianTitle = ({ className, children, ...props }: JestinianProps) => {
  const isMobile = useMediaQuery();
  const JestinianTitle = isMobile ? DrawerTitle : DialogTitle;

  return (
    <JestinianTitle className={className} {...props}>
      {children}
    </JestinianTitle>
  );
};

const JestinianBody = ({ className, children, ...props }: JestinianProps) => {
  return (
    <div className={cn('px-4 md:px-0', className)} {...props}>
      {children}
    </div>
  );
};

const JestinianFooter = ({ className, children, ...props }: JestinianProps) => {
  const isMobile = useMediaQuery();
  const JestinianFooter = isMobile ? DrawerFooter : DialogFooter;

  return (
    <JestinianFooter className={className} {...props}>
      {children}
    </JestinianFooter>
  );
};

export {
  Jestinian,
  JestinianBody,
  JestinianClose,
  JestinianContent,
  JestinianDescription,
  JestinianFooter,
  JestinianHeader,
  JestinianTitle,
  JestinianTrigger,
};
