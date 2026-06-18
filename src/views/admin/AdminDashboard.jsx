import {MdCurrencyExchange, MdProductionQuantityLimits} from "react-icons/md";
import {FaUsers} from "react-icons/fa";
import {FaCartShopping} from "react-icons/fa6";
import Chart from 'react-apexcharts'
import {Link} from "react-router-dom";

const AdminDashboard = () => {
    const state = {
        series: [
            {
                name: "Ordens",
                data: [23,34,45,56,76,34,23,76,87,78,34,45]
            },
            {
                name: "Vendas",
                data: [67,39,45,56,90,56,23,56,87,78,67,78]
            },
            {
                name: "Vendedores",
                data: [34,39,56,56,80,67,23,56,98,78,45,56]
            },
        ],
        options: {
            colors: ['#181EE8', '#181EE8'],
            plotOptions: {
                bar: {
                    borderRadius: 30
                }
            },
            chart: {
                background: 'transparent',
                foreColor: '#D0D2D6'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                curve: ['smooth', 'straight', 'stepline'],
                lineCap: 'butt',
                colors: '#F0F0F0',
                width: 5,
                dashArray: 0
            },
            xaxis: {
                categories: [
                    'Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
                ]
            },
            legend: {
                position: 'top',
            },
            responsive: [
                {
                    breakpoint: 565,
                    yaxis: {
                        categories: [
                            'Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
                        ]
                    },
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: true,
                            }
                        },
                        chart: {
                            height: "550px"
                        }
                    }
                }
            ]
        }
    }

    return (
        <div className="px-2 md:px-7 py-5">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
                <div className="flex justify-between items-center p-5 bg-[#FAE8E8] rpunded-md gap-3">
                    <div className="flex flex-col justify-start items-start text-[#5C5A5A]">
                        <h2 className="text-3xl font-bold">R$ 3434,00</h2>
                        <span className="text-md font-medium">Total de Vendas</span>
                    </div>
                    <div className="w-[40px] h-[47px] bg-[#FA0305] rounded-full flex justify-center items-center text-xl">
                        <MdCurrencyExchange className="text-[#FAE8E8] shadow-lg" />
                    </div>
                </div>
                <div className="flex justify-between items-center p-5 bg-[#FDE2FF] rpunded-md gap-3">
                    <div className="flex flex-col justify-start items-start text-[#5C5A5A]">
                        <h2 className="text-3xl font-bold">50</h2>
                        <span className="text-md font-medium">Produtos</span>
                    </div>
                    <div className="w-[40px] h-[47px] bg-[#760077] rounded-full flex justify-center items-center text-xl">
                        <MdProductionQuantityLimits className="text-[#FAE8E8] shadow-lg" />
                    </div>
                </div>
                <div className="flex justify-between items-center p-5 bg-[#E9FEEA] rpunded-md gap-3">
                    <div className="flex flex-col justify-start items-start text-[#5C5A5A]">
                        <h2 className="text-3xl font-bold">10</h2>
                        <span className="text-md font-medium">Vendedores</span>
                    </div>
                    <div className="w-[40px] h-[47px] bg-[#038000] rounded-full flex justify-center items-center text-xl">
                        <FaUsers className="text-[#FAE8E8] shadow-lg" />
                    </div>
                </div>
                <div className="flex justify-between items-center p-5 bg-[#ECEBFF] rpunded-md gap-3">
                    <div className="flex flex-col justify-start items-start text-[#5C5A5A]">
                        <h2 className="text-3xl font-bold">54</h2>
                        <span className="text-md font-medium">Ordens</span>
                    </div>
                    <div className="w-[40px] h-[47px] bg-[#0200F8] rounded-full flex justify-center items-center text-xl">
                        <FaCartShopping className="text-[#FAE8E8] shadow-lg" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-wrap mt-7">
                <div className="w-full lg:w-7/12 lg:pr-3">
                    <div className="w-full bg-[#6E5FDF] p-4 rounded-md">
                        <Chart options={state.options} series={state.series} type="bar" height={350} />
                    </div>

                </div>
                <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
                    <div className="w-full bg-[#6E5FDF] p-4 rounded-md text-[#D0D2D6]">
                        <div className="flex justify-between items-center">
                            <h2 className="font-semibold text-lg text-[#D0D2D6] pb-3">Mensagens Recentes dos Vendedores</h2>
                            <Link className="font-semibold text-sm text-[#D0D2D6]">Vê todos</Link>
                        </div>
                        <div className="flex flex-col gap-2 pt-5 text-[#D0D2D6]">
                            <ol className="relative border-1 border-slate-600 ml-4">
                                <li className="mb-3 ml-6">
                                    <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4C7FE2] rounded-full z-10">
                                        <img
                                            className="w-full rounded-full h-full shadow-lg" src="/images/admin.jpg" alt="Admin Image"
                                        />
                                    </div>
                                    <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <Link className="text-md font-normal">Admin</Link>
                                            <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0"> 2 dias atrás</time>
                                        </div>
                                        <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">Como Você está?</div>
                                    </div>
                                </li>
                                <li className="mb-3 ml-6">
                                    <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4C7FE2] rounded-full z-10">
                                        <img
                                            className="w-full rounded-full h-full shadow-lg" src="/images/admin.jpg" alt="Admin Image"
                                        />
                                    </div>
                                    <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <Link className="text-md font-normal">Admin</Link>
                                            <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0"> 2 dias atrás</time>
                                        </div>
                                        <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">Como Você está?</div>
                                    </div>
                                </li>
                                <li className="mb-3 ml-6">
                                    <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4C7FE2] rounded-full z-10">
                                        <img
                                            className="w-full rounded-full h-full shadow-lg" src="/images/admin.jpg" alt="Admin Image"
                                        />
                                    </div>
                                    <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <Link className="text-md font-normal">Admin</Link>
                                            <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0"> 2 dias atrás</time>
                                        </div>
                                        <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">Como Você está?</div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4 bg-[#6A5FDF] rounded-md mt-6">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg text-[#D0D2D6] pb-3">Ordens Recentes</h2>
                    <Link className="font-semibold text-sm text-[#D0D2D6]">Vê todas</Link>
                </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-[#D0D2D6]">
                        <thead className="text-sm text-[#D0D2D6] uppercase border-b border-slate-700">
                        <tr>
                            <th scope='row' className="py-3 px-4">Ordem ID</th>
                            <th scope='row' className="py-3 px-4">Preço</th>
                            <th scope='row' className="py-3 px-4">Status do Pagamento</th>
                            <th scope='row' className="py-3 px-4">Status da Ordem</th>
                            <th scope='row' className="py-3 px-4">Ativo</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 2, 3, 4, 5].map((d, i) => <tr key={i}>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap">#34344</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap">R$ 454,00</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap">Pendente</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap">Pendente</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap"><Link>Veja</Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
