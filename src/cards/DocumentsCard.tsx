import MyImage from '../assets/paperclip.svg'

interface IDocumentCard {
    name: string,
    src: string,
    onClick: () => void
}

const DocumentCard = ({ name, src, onClick }: IDocumentCard) => {
    return (
        <div className="bg-white/20 py-2 px-3 rounded-lg shadow-sm flex flex-col items-center h-36 w-36">
            <div className="flex flex-col gap-2 flex-1">
            <div>
                <img className="cursor-pointer flex" src={src} width={50} height={50} onClick={onClick}/>
            </div>
            <div>
                <h1 className="text-xl font-medium">{name}</h1>
                <h3 className="text-xs opacity-70 italic"></h3>
            </div>
            </div>

        </div>
    )
}

const DocumentsCard = () => {

    return (
        <div className="card w-full flex-1 p-4 flex flex-col gap-4 h-1/3 fscroll">
            <div>
                <h1 className="header">Documents</h1>
                <div className="flex gap-3 items-center flex-col overflow-auto max-h-[24vh] ">
                    <DocumentCard name='Theoretical Class nº1' src={MyImage} onClick={null}/>
                    <DocumentCard name='Theoretical Class nº1' src={MyImage} onClick={null}/>
                    <DocumentCard name='Theoretical Class nº1' src={MyImage} onClick={null}/>
                    <DocumentCard name='Theoretical Class nº1' src={MyImage} onClick={null}/>
                    <DocumentCard name='Theoretical Class nº1' src={MyImage} onClick={null}/>
                    <DocumentCard name='Theoretical Class nº1' src={MyImage} onClick={null}/> 
                </div>
            </div>
            

        </div>
    )
}

export default DocumentsCard;