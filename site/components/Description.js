import { Dribbble, Facebook, Linkedin, Twitch, Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
export default function Description(){
    return(
        <div className="ml-[200px]">
            <div className="flex my-[100px]">
                <div className="">
                    <div className="text-3xl font-bold mt-28">Your Online Presence, All in One Branch!</div>
                    <div className=" ">BioBranch makes it effortless to manage and showcase all your social media profiles and important links in one stunning, customizable page.</div>
                </div>

                <div className="w-1/2">
                    <div className="flex justify-center my-10 ml-4">
                        <Facebook className="h-10 w-10"/>
                        <Twitter className="h-10 w-10 ml-14"/>
                    </div>
                    <div className="flex my-[50px] ml-14">
                        <Linkedin className="h-10 w-10 ml-10"/>
                        <Instagram className="h-10 w-10 ml-[220px]"/>
                    </div>
                    <div className="flex mt-[20px] justify-center ml-4">
                        <Twitch className="h-10 w-10 ml-10"/>
                        <Dribbble className="h-10 w-10 ml-14"/>
                    </div>
                </div>

            </div>
        </div>
    )
}