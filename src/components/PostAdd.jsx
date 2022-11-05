import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Check } from "phosphor-react";
import { vitrineitens } from "./VideoPreviewSlider";
export const PostAdd = () => {
  const inputstyle =
    "focus:outline-0 bg-slate-200 px-4 py-1 rounded text-base placeholder:text-zinc-500 focus:shadow-none focus:border-none";

function addpost () {
  let newpost = {}
  let id = vitrineitens.length + 1
  let title = document.getElementById("titlepost").value;
  let linkimg = document.getElementById("titlepost").value;
  let linkvideo = document.getElementById("videolink").value;

  console.log(newpost)
  vitrineitens.push({id: id, title: title, linkImg: linkimg, linkvideo: linkvideo})
  console.log(vitrineitens)

}


  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed z-10 flex justify-center items-center">
        <Dialog.Content className="relative bg-white text-black w-full mx-3 px-5 py-3 md:px-10 rounded-lg md:w-[480px] shadow-black/25">
          <Dialog.Close className="absolute right-3 top-3">
            <X size={24} />
          </Dialog.Close>
          <Dialog.Title className="font-black text-2xl text-center px-4">
            <span className="pink-gradient">Adicionar </span>Postagem
          </Dialog.Title>
          <form className="mt-8 flex flex-col mx-1 gap-2">

              <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold">
                  Nome do video
                </label>
                <input
                  name="titlepost"
                  type="text"
                  id="titlepost"
                  className={inputstyle}
                ></input>
              </div>

              <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold">
                  Link da imagem
                </label>
                <input
                  name="imglink"
                  type="text"
                  id="imglink"
                  className={inputstyle}
                ></input>
              </div>

            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold">
                Link do video
              </label>
              <input
                name="videolink"
                type="text"
                id="videolink"
                className={inputstyle}
              ></input>
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold">
                Descrição
              </label>
              <textarea
                name="resumo"
                type="text"
                id="resumo"
                className={inputstyle}
              ></textarea>
            </div>
            <Dialog.Close>
              <button onClick={() => addpost()}
                className="w-full bg-primary hover:bg-primary/95 flex justify-center items-center gap-3 px-5 h-12 rounded-md text-white font-semibold"
                type="submit"
              >
                <Check size={32} />
                Salvar
              </button>
            </Dialog.Close>
          </form>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
};
