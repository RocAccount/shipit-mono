var fsMock = {
    readFile:function(file,cb) {
        cb(null,'<?xml version="1.0" encoding="utf-8"?>\
            <Project DefaultTargets="Build" ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">\
            <PropertyGroup>\
                <Configuration Condition=" \'$(Configuration)\' == \'\' ">Debug</Configuration>\
                <Platform Condition=" \'$(Platform)\' == \'\' ">AnyCPU</Platform> \
                <ProjectTypeGuids>{349C5851-65DF-11DA-9384-00065B846F21};{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}</ProjectTypeGuids>\
                <ProjectGuid>{94CD0AD5-8261-44EC-AF20-4E1299B19786}</ProjectGuid>\
                <OutputType>Library</OutputType>\
                <RootNamespace>testMVC</RootNamespace>\
                <AssemblyName>testMVC</AssemblyName>\
                <TargetFrameworkVersion>v4.5</TargetFrameworkVersion>\
           </PropertyGroup>\
        <PropertyGroup Condition=" \'$(Configuration)|$(Platform)\' == \'Debug|AnyCPU\' ">\
            <DebugSymbols>true</DebugSymbols>\
            <DebugType>full</DebugType>\
            <Optimize>false</Optimize>\
            <OutputPath>bin</OutputPath>\
            <DefineConstants>DEBUG;</DefineConstants>\
        <ErrorReport>prompt</ErrorReport>\
        <WarningLevel>4</WarningLevel>\
        <ConsolePause>false</ConsolePause>\
        </PropertyGroup> \
        <PropertyGroup Condition="\'$(Configuration)|$(Platform)\' == \'Release|AnyCPU\' "> \
            <DebugType>full</DebugType>\
            <Optimize>true</Optimize>\
            <OutputPath>bin</OutputPath>\
            <ErrorReport>prompt</ErrorReport>\
            <WarningLevel>4</WarningLevel>\
            <ConsolePause>false</ConsolePause>\
            </PropertyGroup>\
            <ItemGroup>\
            <Reference Include="System" />\
            <Reference Include="System.Web" />\
            <Reference Include="System.Xml" />\
            <Reference Include="System.Core" />\
            <Reference Include="System.Web.Services" />\
            <Reference Include="System.Web.Routing" />\
            <Reference Include="System.Web.Extensions" />\
            <Reference Include="System.Web.Abstractions" />\
            <Reference Include="System.Web.DynamicData" />\
            <Reference Include="System.ComponentModel.DataAnnotations" />\
            <Reference Include="System.Xml.Linq" />\
            <Reference Include="Microsoft.CSharp" />\
            <Reference Include="Microsoft.Web.Infrastructure">\
            <HintPath>..\\packages\\Microsoft.Web.Infrastructure.1.0.0.0\\lib\\net40\\Microsoft.Web.Infrastructure.dll</HintPath>\
        </Reference>\
        <Reference Include="System.Web.Razor">\
            <HintPath>..\\packages\\Microsoft.AspNet.Razor.3.2.0\\lib\\net45\\System.Web.Razor.dll</HintPath>\
        </Reference>\
        <Reference Include="System.Web.Helpers">\
            <HintPath>..\\packages\\Microsoft.AspNet.WebPages.3.2.0\\lib\\net45\\System.Web.Helpers.dll</HintPath>\
        </Reference>\
        <Reference Include="System.Web.WebPages">\
            <HintPath>..\\packages\\Microsoft.AspNet.WebPages.3.2.0\\lib\\net45\\System.Web.WebPages.dll</HintPath>\
        </Reference>\
        <Reference Include="System.Web.WebPages.Deployment">\
            <HintPath>..\\packages\\Microsoft.AspNet.WebPages.3.2.0\\lib\\net45\\System.Web.WebPages.Deployment.dll</HintPath>\
        </Reference>\
        <Reference Include="System.Web.WebPages.Razor">\
            <HintPath>..\\packages\\Microsoft.AspNet.WebPages.3.2.0\\lib\\net45\\System.Web.WebPages.Razor.dll</HintPath>\
        </Reference>\
        <Reference Include="System.Web.Mvc">\
            <HintPath>..\\packages\\Microsoft.AspNet.Mvc.5.2.0\\lib\\net45\\System.Web.Mvc.dll</HintPath>\
        </Reference>\
        </ItemGroup>\
        <ItemGroup>\
            <Folder Include="Content\\" />\
            <Folder Include="Models\\" />\
            <Folder Include="Scripts\\" />\
            </ItemGroup>\
            <ItemGroup>\
            <Compile Include="Controllers\\HomeController.cs" />\
            <Compile Include="Global.asax.cs">\
            <DependentUpon>Global.asax</DependentUpon>\
            </Compile>\
            </ItemGroup>\
            <ItemGroup>\
            <Content Include="Views\\Home\\chalk.cshtml" />\
            <Content Include="Views\\Shared\\_Layout.cshtml" />\
            <Content Include="Views\\Shared\\Error.cshtml" />\
            <Content Include="Views\\_ViewStart.cshtml" />\
            <Content Include="test\\findbarButton-next-rtl%402x.png" />\
            <Content Include="Web.config" />\
            <Content Include="Global.asax" />\
            <Content Include="packages.config" />\
            </ItemGroup>\
            <Import Project="$(MSBuildBinPath)\\Microsoft.CSharp.targets" />\
            <ProjectExtensions>\
            <MonoDevelop>\
            <Properties>\
            <XspParameters Port="8080" Address="127.0.0.1" SslMode="None" SslProtocol="Default" KeyType="None" CertFile="" KeyFile="" PasswordOptions="None" Password="" Verbose="True" />\
            </Properties> \
            </MonoDevelop> \
            </ProjectExtensions> \
            </Project>');

    }
};

module.exports = fsMock;