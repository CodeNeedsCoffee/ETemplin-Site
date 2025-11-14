import { Card, CardBody, Image, Button } from "@heroui/react";
import { ExternalLinkIcon } from "../components/icons";

export const ProfileCard = ({ atlName = "name", imgURL = "/example.jpg", header1 = "Header", header2 = "Header2", header3 = "Header3", link = "#" }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-2xl"
            aria-label={`Open profile for ${header1}`}
        >
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                alt={atlName}
                                className="object-cover"
                                height={150}
                                shadow="md"
                                src={imgURL}
                                width="100%"
                            />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h1 className="text-large font-medium mt-2">{header1}</h1>
                                    <h3 className="font-semibold text-foreground/90">{header2}</h3>
                                    <p className="text-small text-foreground/80">{header3}</p>
                                </div>
                            </div>

                            <div className="flex w-full items-center justify-end">
                                <Button
                                    isIconOnly
                                    className="data-hover:bg-foreground/10!"
                                    radius="full"
                                    variant="light"
                                    as="span"
                                    tabIndex={-1}
                                >
                                    <ExternalLinkIcon size={2.25} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </a>
    );
};