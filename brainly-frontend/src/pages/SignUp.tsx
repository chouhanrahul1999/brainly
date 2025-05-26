import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function SignUp() {
const usernameRef = useRef<HTMLInputElement>(null);
const passwordRef = useRef<HTMLInputElement>(null);
const firstNameRef = useRef<HTMLInputElement>(null);
const lastNameRef = useRef<HTMLInputElement>(null);
const navigat = useNavigate();
   async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const firstName = firstNameRef.current?.value;
        const lastName = lastNameRef.current?.value;
       await axios.post(BACKEND_URL + "/api/v1/signup", {
            username,
            password,
            firstName,
            lastName
        })
        navigat("/signin")
    }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center border-gray-100">
      <div className="bg-white border-gray-100 min-w-48 h-72 p-8 rounded-xl  content-center">
        <Input ref={firstNameRef} placeholder="Firstname" />
        <Input ref={lastNameRef} placeholder="Lastname" />
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />
        <div className="flex justify-center pt-4">
          <Button onClick={signup} loading={false} variant="primary" text="Signup" fullWidth={true} />
        </div>
      </div>
    </div>
  );
}
