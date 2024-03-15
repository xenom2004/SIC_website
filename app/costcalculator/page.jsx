
import React from 'react'

const page = () => {
  return (
    <div>
        <head>
    {/* <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Document</title>
</head>

<body>
    <div class="top">
    <h1 class="text-3xl font-bold text-center mt-8 mb-4">Estimated charges include postal charges of the analysis report</h1>

    
    <div class="max-w-{50rem} mx-auto">

        <div class="flex flex-col">
            <div class="overflow-x-auto shadow-md sm:rounded-lg">
                <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden ">
                        <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                            <thead class="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th scope="colgroup" class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                        Category of User:
                                    </th>
                                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                        IITI Community
                                    </th>
                                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                        Academic Institutions
                                    </th>
                                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                        Commercial/ Industry
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                        <div class="flex items-center justify-center">
                                            Instrument Charges (In Rs.):
                                        </div>
                                    </th>
                                    <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                        <input type="text" class="w-56 h-full p-2 border rounded-md" placeholder="0"></input>
                                    </td>
                                    <td class="py-4 px-6 text-sm font-medium text-center text-gray-500 whitespace-nowrap dark:text-white">
                                        <input type="text" class="w-56 h-full p-2 border rounded-md" placeholder="0"></input>
                                    </td>
                                    <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                        <input type="text" class="w-56 h-full p-2 border rounded-md" placeholder="0"></input>
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                        <div class="flex items-center justify-center">
                                            GST (In Rs.):
                                        </div>
                                    </th>
                                    <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                        <input type="text" class="w-56 h-full p-2 border rounded-md" placeholder="0"></input>
                                    </td>
                                    <td class="py-4 px-6 text-sm font-medium text-center text-gray-500 whitespace-nowrap dark:text-white">
                                        <input type="text" class="w-56 h-full p-2 border rounded-md" placeholder="0"></input>
                                    </td>
                                    <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                        <input type="text" class="w-56 h-full p-2 border rounded-md" placeholder="0"></input>
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                        <div class="flex items-center justify-center">
                                            Total Charges (In Rs.):
                                        </div>
                                    </th>
                                    <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                        <input type="text" class="w-56 h-full p-2 border rounded-md" placeholder="0"></input>
                                    </td>
                                    <td class="py-4 px-6 text-sm font-medium text-center text-gray-500 whitespace-nowrap dark:text-white">
                                        <input type="text" class="w-56 h-full p-2 border rounded-md" placeholder="0"></input>
                                    </td>
                                    <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                        <input type="text" class="w-56 h-full p-2 border rounded-md" placeholder="0"></input>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
    <div class="buttom">
        <h1 class="text-3xl font-bold text-center mt-12 mb-4">(Select type of analysis, test/mode, enter no of samples
            and subsequent peak/hour)
            Estimation of Charges
        </h1>
        <div class="flex justify-center mt-4 mb-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Reset</button>
        </div>
        <div class="max-w-{50rem} mx-auto">

            <div class="flex flex-col">
                <div class="overflow-x-auto shadow-md sm:rounded-lg">
                    <div class="inline-block min-w-full align-middle">
                        <div class="overflow-hidden ">
                            <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="colgroup"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                            #
                                        </th>
                                        <th scope="col"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                            No. of Samples
                                        </th>
                                        <th scope="col"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                            Subsequent Hours/ Peak
                                        </th>
                                        <th scope="col"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                            Machine Name
                                        </th>
                                        <th scope="col"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                            IITI Community
                                        </th>
                                        <th scope="col"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                            Academic Institutions
                                        </th>
                                        <th scope="col"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                            Commercial/ Industry
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                AFM
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                              100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        
                                    </tr>
                                    
                                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                Fourier Transform Infrared Spectrometer (FT-IR)
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                              100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        
                                    </tr>
                                    
                                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                Scanning Electron Microscopy (FE-SEM)
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                              100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        
                                    </tr>
                                    
                                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                UV VIS NIR
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                              100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        
                                    </tr>
                                    
                                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                Nuclear Magnetic Resonance (NMR)
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                              100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        
                                    </tr>
                                    
                                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                AFM
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                              100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        
                                    </tr>
                                    
                                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                AFM
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                              100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        
                                    </tr>
                                    
                                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                Thermal Gravimetric Analyzer
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                              100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        
                                    </tr>
                                    
                                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text" class="w-40 h-min p-2 border rounded-md" placeholder="1"></input>
                                        </td>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                AFM
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                              100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                        <th scope="row" class="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="flex items-center justify-center">
                                                100
                                            </div>
                                        </th>
                                       
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</body>
      
    </div>
  )
}

export default page



