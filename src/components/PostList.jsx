import React from "react";
import { PostAdd } from "./PostAdd";
import * as Dialog from '@radix-ui/react-dialog';
import { vitrineitens } from "./VideoPreviewSlider";

const PostList = () => {
  return (
    <div>
          <Dialog.Trigger className=" px-3 py-4 bg-primary hover:bg-primary/90 rounded text-white absolute bottom-6">
            Adicionar Postagem
          </Dialog.Trigger>
      {vitrineitens.map((item, index) => {
        return (
          <div key={index} className="flex gap-4 items-center border-b-2 border-zinc-300 border-solid my-1 p-2">
            <img
              src={item.linkImg}
              className="object-cover rounded-full w-12 h-12"
            />
            <div className="flex flex-col">
              <h2>{item.title}</h2>
              <span className="text-xs">30 visualizações</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
