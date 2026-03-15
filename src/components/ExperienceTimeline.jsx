import { motion } from 'framer-motion';

// Reference: https://tw-elements.com/docs/react/components/timeline/
export const Timeline = ({ experience }) => {

    return (
        <div className="mt-4 md:mx-5">
            <ol className="border-l-2 border-(--colour-yellow)">
                {experience.map((job, i) => (
                    <li key={i}>
                        <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-(--colour-yellow)"></div>
                            <p className="text-sm md:text-md text-neutral-500 dark:text-neutral-300 font-heading">
                                {job.dates}
                            </p>
                        </div>
                        <div className="mb-6 ml-4 mt-2">
                            <h4 className="mb-1.5 text-md md:text-xl font-heading font-bold text-(--colour-yellow)">
                                {job.title}
                            </h4>
                            <p className="mb-3 text-sm md:text-md font-body text-(--colour-white)">
                                {job.experience}
                            </p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};