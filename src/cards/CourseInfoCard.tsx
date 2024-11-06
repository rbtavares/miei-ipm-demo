import { Calendar } from "@/components/ui/calendar"
import React from "react"

interface ICourseCard {
    name: string,
    abbrev: string,
    description: string
    onClick: () => void
}

const CourseInfoCard = () => {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className="card w-full flex-1 p-4 flex flex-col gap-4 fscroll">
            {/* Title */}

            <div className="flex-1 flex gap-4">
            
                <div className="flex-1 flex-col gap-4">
                    <h1 className="flex flex-col text-3xl font-medium text-white drop-shadow-md mb-2">Interação Pessoa Máquina </h1>
            
                    {/* Info */}
                    <div className="flex flex-col text-white mb-4">
                        <h2 className="text-sm opacity-90">Professor: Teresa Isabel Lopes Romão</h2> 
                        <h2 className="text-sm opacity-90">Regent: Teresa Isabel Lopes Romão</h2> 
                    </div>

                    {/* Description */}
                    <div className="text-white text-justify overflow-y-auto h-52">
                        <h2>Esta disciplina enfatiza a importância de uma boa interface e mostra como os métodos de desenho de interacção podem ter uma contribuição muito significativa para a melhoria da interacção pessoa-máquina e, consequentemente para o sucesso dos sistemas interactivos. Pretende-se preparar os alunos para o desenvolvimento de interfaces de sistemas interactivos que do ponto de vista do utilizador se revelem eficientes e eficazes. Serão estudados os factores humanos que condicionam a interacção. Será analisado o ciclo de vida completo de desenvolvimento de interfaces para sistemas interactivos, incluido: análise e formulação dos requisitos dos utilizadores, exploração de possíveis soluções, avaliação do potencial destas soluções, implementação de protótipos e sua avaliação. A disciplina foca os aspectos recentes da teoria e prática da especificação, desenho, implementação e avaliação de interfaces, discutindo os principais aspectos do processo iterativo de desenho. Também é explorada a recente investigação a decorrer nesta área de conhecimento (HCI), de forma a proporcionar aos alunos uma visão abrangente da mesma, bem como o conhecimento dos mais recentes e inovadores desenvolvimento ocorrido neste campo. </h2> 
                    </div>
                </div>

                {/* Calendar */}
                <div className="flex w-72p-2">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                /></div>
            </div>
        </div>
    )
}

export default CourseInfoCard;