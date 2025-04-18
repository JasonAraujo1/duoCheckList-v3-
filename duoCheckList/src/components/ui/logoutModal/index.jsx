
export default function LogoutModal({handleConfirm, handleCancel}) {
    return (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg text-center shadow-lg max-w-sm w-full">
                <h2 className="text-xl font-semibold">Tem certeza que deseja sair?</h2>
                <div className="mt-4 flex justify-center gap-4">
                    <button
                        onClick={handleConfirm}
                        className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition cursor-pointer"
                    >
                        Sim
                    </button>
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition cursor-pointer"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}
