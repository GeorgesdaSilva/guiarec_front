import React from "react";
import { UserCircle, SignOut, ClipboardText, PlayCircle } from "phosphor-react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { vitrineitens } from "../../components/VideoPreviewSlider";
import PostList from "../../components/PostList";
import { PostAdd } from "../../components/PostAdd";
import SubmitList from "../../components/SubmitList";

const index = () => {
  const [title, setTitle] = useState("Formulário");
  const [selected, setSelected] = useState(0);

  return (
    <div className="bg-[#F0F4F8] w-full">
      <div className=" md:m-auto">
        <div className="mx-5 py-4 flex justify-between">
          <img src="./Logoguia.svg" className="h-8 " />
          <div className=" flex gap-4 items-center">
            <div className="flex gap-1 justify-center items-center">
              <div className="flex flex-col justify-center">
                <span>Luan Rodrigues</span>
                <span className="text-xs">Administrador</span>
              </div>
              <UserCircle size={45} color="rgb(113 113 122)" />
            </div>
            <a href="./">
              <SignOut size={24} color="rgb(113 113 122)" />
            </a>
          </div>
        </div>
      </div>
      <div className="h-screen mx-6">
        <div className="grid grid-cols-12 grid-rows-none gap-4 w-auto">
          <div className=" row-span-2 col-span-2">
            <div className=" text-zinc-500  bg-white rounded-2xl shadow-sm py-3">
              <div className="flex flex-col items-center">
                <div className="font-bold text-xl mt-2 mb-3">Dashboard</div>
                <ul className="flex flex-col gap-1 items-start">
                  <li>
                    <button
                      className="hover:text-primary hover:font-bold focus:text-primary focus:font-bold"
                      onClick={() => {
                        setTitle("Formulários");
                        setSelected(0);
                      }}
                    >
                      Formulário
                    </button>
                  </li>
                  <li>
                    <button
                      className="hover:text-primary hover:font-bold focus:text-primary focus:font-bold"
                      onClick={() => {
                        setTitle("Posts");
                        setSelected(1);
                      }}
                    >
                      Posts
                    </button>
                  </li>
                </ul>
              </div>
              {/* Relatórios */}
              <div className="flex flex-col gap-4 my-10 px-3">
                <div className="bg-white p-4 rounded-md border-2 border-zinc-300 border-solid">
                  <div className="flex items-center gap-5 mb-2">
                    <div className="bg-primary rounded-full w-14 h-14 flex justify-center items-center">
                      <ClipboardText size={32} color="#FFFFFF" />
                    </div>
                    <span className="text-zinc-500 font-bold">Formulários</span>
                  </div>
                  <div>
                    <h3 className="ml-2 text-3xl font-black text-zinc-500">
                      126
                    </h3>
                  </div>
                </div>
                {/* Item2 */}
                <div className="bg-white p-4 rounded-md border-2 border-zinc-300 border-solid">
                  <div className="flex items-center gap-5 mb-2">
                    <div className="bg-primary rounded-full w-14 h-14 flex justify-center items-center">
                      <PlayCircle size={32} color="#f2f2f2" />
                    </div>
                    <span className="text-zinc-500 font-bold">Postagens</span>
                  </div>
                  <div>
                    <h3 className=" ml-2 text-3xl font-black text-zinc-500">
                      {vitrineitens.length}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" row-span-2 col-start-3 col-span-10 bg-white rounded-2xl shadow-sm ">
            <div className="flex flex-col gap-5 p-3">
              <h2 className="ml-6 text-zinc-600 text-3xl font-bold">{title}</h2>
              {selected === 0 ? (
                <SubmitList />
              ) : (
                <div>
                  <Dialog.Root>
                    <PostAdd />
                    <PostList />
                  </Dialog.Root>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
