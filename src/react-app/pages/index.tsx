import { Card, CardBody, Image, Button } from "@heroui/react";
import { ProfileCard } from "../components/profile-card";
import DefaultLayout from "../components/default";

export default function IndexPage() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <div className={"w-full my-2 text-xl text-default-800 block max-w-full"}>
                        Which Templin are you looking for?
                    </div>
                </div>
            </section>
            <section className="flex flex-row flex-wrap items-center justify-center gap-4 py-8 md:py-10">
                <ProfileCard
                    atlName="Emma Templin"
                    imgURL="/emma_profile.jpg"
                    header1="Emma Templin"
                    header2="Videographer Editor"
                    header3="YouTube Content Creator"
                />
                <ProfileCard
                    atlName="Evan Templin"
                    imgURL="/evan_profile.jpg"
                    header1="Evan Templin"
                    header2="Developer"
                    header3="Technology Enthusiast"
                />
            </section>
        </DefaultLayout>
    );
}
