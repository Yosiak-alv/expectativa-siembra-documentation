<script setup>
import SectionNavigator from '@/components/SectionNavigator.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const SECTIONS_REQUIREMENTS = [
    { name: 'Python', href: '#python' },
    {name: 'Py on Windows', href: '#python-windows'},
    {name: 'Py on Linux', href: '#python-linux'},
    { name: 'VPN Connection', href: '#vpn-connection' }
];
</script>

<template>
    <MainLayout>
        <template #content>
            <h1 class="mb-12 text-4xl font-bold leading-none text-gray-700">Requirements</h1>
            <p class="my-6">
                To run this project, you need to have the following software installed on your system:
            </p>
            
            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="python">Python</h2>
            <p class="my-6">
                Quick guide to installing Python on the most common operating systems.
            </p>
            <ul class="list-disc list-inside">
                <li class="my-2">
                    <a href="#python-windows" class="text-blue-700 hover:text-orange-700 font-medium underline">Installing Python on Windows</a>
                </li>
                <li class="my-2">
                    <a href="#python-linux" class="text-blue-700 hover:text-orange-700 font-medium underline">Installing Python on Linux</a>
                </li>
            </ul>
            <h3 class="mt-8 mb-4 text-xl font-bold leading-tight text-gray-700" id="python-windows">Installing Python on Windows</h3>
            <p class="my-6">
                If you haven't installed Python on your Windows operating system, 
                download and install the latest version of the Python 3 installer 
                on your computer. 
                <a href="https://www.python.org/downloads/" target="_blank" class="text-blue-700 hover:text-orange-700 font-medium underline">Python Page</a>, 
                Make sure to check the box during 
                installation that adds Python to the PATH, labeled something like 
                Add Python 3.X to PATH.
            </p>
            <p class="my-6">
                Once Python is installed, you should be able to open a command window, 
                type python, hit ENTER, and see a Python prompt opened. Type quit() 
                to exit it. You should also be able to run the command pip and see its 
                options. If both of these work, then you are ready to go.
            </p>
            <p class="my-6">
                If you cannot run `python` or `pip` from a command prompt, you may need to add the Python installation directory path to the Windows PATH variable.
            </p>
            <ul class="list-decimal list-inside">
                <li class="my-2">
                    The easiest way to do this is to find the new shortcut for Python in your start menu, right-click on the shortcut, and find the folder path for the `python.exe` file.
                    For Python3, this will likely be something like `C:\Users\USERNAME\AppData\Local\Programs\Python\Python37`
                    
                </li>
                <li class="my-2">
                    Open your Advanced System Settings window, navigate to the "Advanced" tab, and click the "Environment Variables" button
                </li>
                <li class="my-2">
                    Create a new system variable:
                    Variable name: `PYTHON_HOME`
                    Variable value: your_python_installation_directory
                </li>
                <li class="my-2">
                    Now modify the PATH system variable by appending the text `;%PYTHON_HOME%\;%PYTHON_HOME%;%PYTHON_HOME%\Scripts\` to the end of it.
                </li>
                <li class="my-2">
                    Close out your windows, open a command window and make sure you can run the commands `python` and `pip`
                </li>
            </ul>

            <h3 class="mt-8 mb-4 text-xl font-bold leading-tight text-gray-700" id="python-linux">Installing Python on Linux</h3>
            <ul class="list-disc list-inside">
                <li class="my-2">
                    <span class="font-semibold">Raspberry Pi OS :</span>
                    `sudo apt install -y python3-pip`.
                </li>
                <li class="my-2">
                    <span class="font-semibold">Debian distributions (Ubuntu):</span>
                    Update the list of available APT repositories with `sudo apt update` and install Python and PIP: `sudo apt install -y python3-pip`.
                </li>
                <li class="my-2">
                    <span class="font-semibold">The RHEL (CentOS) distributions:</span>
                    Install EPEL package: `sudo yum install -y epel-release` and then  Python and PIP: `sudo yum install -y python3-pip`
                </li>
            </ul>

            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="vpn-connection">VPN Connection</h2>
            <p class="my-6">
                To connect to the server, you need to establish a VPN connection. This VPN is essential for accessing the same 
                network as the <span class="font-bold">MAG (Ministerio de Agricultura)</span>, where the PostgreSQL data source resides. 
                The PostgreSQL database contains data from the Expectativa Siembra survey conducted via Survey Solutions. 
                Establishing a secure VPN connection ensures that you can safely connect to this PostgreSQL server and 
                access the survey data. The SQL Server database serves as the destination for this data, where it will 
                be stored and made accessible for further analysis and reporting. Please contact the system administrator 
                to obtain the necessary VPN credentials, which are vital for creating this secure network connection and 
                facilitating the data transfer process.
            </p>
        </template>

        <template #section-navigator>
            <SectionNavigator :sections="SECTIONS_REQUIREMENTS"/>
        </template>
    </MainLayout>
</template>

