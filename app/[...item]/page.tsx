'use client';
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function Teste({ params }: any) {

    const rota = params.item.join("/")
    const [conteudo, setConteudo] = useState("")
    const [ultimoConteudo, setUltimoConteudo] = useState<any>(null)
    const toastId = 'salvando'



    const getDataPagina = async () => {

        const dataLocal = JSON.parse(localStorage.getItem(`${rota}`) || "{}")

        const atualizar = dataLocal.dataAtualizacao ? `?dataAtualizacao=${dataLocal.dataAtualizacao}` : ""

        const url = `https://apianonypad.devlucas.online/${rota}${atualizar}`

        console.log(url)

        const resposta: any = await fetch(url)

        console.log(resposta)

        const data = await resposta.json()

        console.log(data)

        setConteudo(data.conteudo)

        if (ultimoConteudo === null) setUltimoConteudo(data.conteudo)

        localStorage.setItem(`${rota}`, JSON.stringify({
            dataAtualizacao: data.dataAtualizacao,
            conteudo: data.conteudo
        }))

    }

    const setDataPagina = async (conteudo: string) => {
        try {

            const resposta: any = await fetch(`https://apianonypad.devlucas.online/${rota}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ conteudo })
            })
            const data = await resposta.json()


            localStorage.setItem(`${rota}`, JSON.stringify({
                dataAtualizacao: data.dataAtualizacao,
                conteudo: data.conteudo
            }))

            toast.success('Salvo com sucesso!', {
                id: toastId,
            })

        } catch (error) {

            toast.error('Erro ao salvar!', {
                id: toastId,
            })

        }

    }



    useEffect(() => {
        let timer: any;
        let timerToast: any;
        // Configura um temporizador para 3 segundos sempre que o userInput muda


        if (setUltimoConteudo === null) return
        if (conteudo === ultimoConteudo) return

        timerToast = setTimeout(() => {
            toast.loading('Salvando...', {
                id: toastId,
                position: "top-right"
            })
        }
            , 1000);

        setUltimoConteudo(conteudo)
        timer = setTimeout(() => {
            if (conteudo !== ultimoConteudo) setDataPagina(conteudo)
        }, 1800);


        // Limpa o temporizador ao desmontar o componente ou quando o userInput muda
        return () => { clearTimeout(timer); clearTimeout(timerToast) };
    }, [conteudo]);




    useEffect(() => {
        getDataPagina()
    }, [])

    return (
        <>
            <textarea className="text-black w-full p-2 no-underline box-border overflow-x-auto resize-none outline-none" style={
                {
                    height: "calc(99vh)"
                }
            } value={conteudo} onChange={(e: any) => setConteudo(e.target.value)} ></textarea>
            <Toaster />
        </>
    );
}