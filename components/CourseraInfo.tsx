import React from 'react';

const CourseraInfo: React.FC = () => {
  return (
    <>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/322f245ea18506f5a9e048015d53f8bfb73e2d3cba8cb6dae2b96284aaf8d6b6?placeholderIfAbsent=true&apiKey=fc6efef34e3641e0a00c3c8aba71e737" className="object-contain mt-12 aspect-[31.25] w-[62px] max-md:mt-10" alt="Coursera logo" />
      <div className="flex gap-2 mt-3.5 whitespace-nowrap">
        <div className="grow text-xs text-zinc-500">Coursera</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/900957d7d0a7dfb6dbbeca87f03e84e7396a39542ed3df1174dca604d8b8a222?placeholderIfAbsent=true&apiKey=fc6efef34e3641e0a00c3c8aba71e737" className="object-contain shrink-0 aspect-[0.19] w-[3px]" alt="" />
        <div className="flex gap-1 my-auto">
          <div className="text-xs text-center text-zinc-600">00</div>
          <div className="text-xs text-stone-300">Meta</div>
        </div>
      </div>
    </>
  );
};

export default CourseraInfo;