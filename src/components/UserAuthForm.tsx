"use client";

import { FC, HTMLAttributes, useState } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { toast } from "@/hooks/use-toast";

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "There was a problem",
        description: "There was an error logging in with Google",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithFacebook = async () => {
    setIsLoading(true);

    try {
      await signIn("facebook");
    } catch (error) {
      toast({
        title: "There was a problem",
        description: "There was an error logging in with Facebook",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div {...props} className={cn("flex flex-col items-center space-y-2", className)}>
      <Button
        size="sm"
        className="w-1/2 flex items-center"
        onClick={loginWithGoogle}
        isLoading={isLoading}
      >
        {isLoading ? null : (
          <Icons.google className="h-4 w-4 mr-3 fill-white" />
        )}
        <span className="font-medium">Google</span>
      </Button>
      <Button
        size="sm"
        className="w-1/2 flex items-center"
        onClick={loginWithFacebook}
        isLoading={isLoading}
      >
        {isLoading ? null : (
          <Icons.facebook className="h-5 w-5 mr-3 stroke-[1.5px]" />
        )}
        <span className="font-medium">Facebook</span>
      </Button>
    </div>
  );
};

export default UserAuthForm;
