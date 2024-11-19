import { motion } from 'framer-motion'

const CourseInfoCard = () => {
    return (
        <div className="card w-full h-full flex-1 p-4 flex flex-col gap-4 absolute fscroll">
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="header">Interação Pessoa Máquina</motion.h1>

            <div className="flex flex-col gap-2 overflow-y-auto fscroll w-full">
                <div className="flex gap-2  text-white">
                    <h2 className="text-sm opacity-90">Professor: Teresa Isabel Lopes Romão</h2> 
                    <h2 className="text-sm opacity-90">Regent: Teresa Isabel Lopes Romão</h2> 
                </div>

                <div className="gap-2 pr-1 flex-1 flex flex-col p-0 text-white text-justify overflow-y-auto">
                    <h2>Esta disciplina enfatiza a importância de uma boa interface e mostra como os métodos de desenho de interacção podem ter uma contribuição muito significativa para a melhoria da interacção pessoa-máquina e, consequentemente para o sucesso dos sistemas interactivos. Pretende-se preparar os alunos para o desenvolvimento de interfaces de sistemas interactivos que do ponto de vista do utilizador se revelem eficientes e eficazes. Serão estudados os factores humanos que condicionam a interacção. Será analisado o ciclo de vida completo de desenvolvimento de interfaces para sistemas interactivos, incluido: análise e formulação dos requisitos dos utilizadores, exploração de possíveis soluções, avaliação do potencial destas soluções, implementação de protótipos e sua avaliação. A disciplina foca os aspectos recentes da teoria e prática da especificação, desenho, implementação e avaliação de interfaces, discutindo os principais aspectos do processo iterativo de desenho. Também é explorada a recente investigação a decorrer nesta área de conhecimento (HCI), de forma a proporcionar aos alunos uma visão abrangente da mesma, bem como o conhecimento dos mais recentes e inovadores desenvolvimento ocorrido neste campo. </h2> 
                </div>
            </div>
        </div>
    )
}

export default CourseInfoCard;