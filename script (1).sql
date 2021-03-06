USE [master]
GO
/****** Object:  Database [dbNewBus]    Script Date: 09-12-2020 23:12:54 ******/
CREATE DATABASE [dbNewBus]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'dbNewBus', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\dbNewBus.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'dbNewBus_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\dbNewBus_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [dbNewBus] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [dbNewBus].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [dbNewBus] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [dbNewBus] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [dbNewBus] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [dbNewBus] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [dbNewBus] SET ARITHABORT OFF 
GO
ALTER DATABASE [dbNewBus] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [dbNewBus] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [dbNewBus] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [dbNewBus] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [dbNewBus] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [dbNewBus] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [dbNewBus] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [dbNewBus] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [dbNewBus] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [dbNewBus] SET  ENABLE_BROKER 
GO
ALTER DATABASE [dbNewBus] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [dbNewBus] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [dbNewBus] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [dbNewBus] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [dbNewBus] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [dbNewBus] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [dbNewBus] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [dbNewBus] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [dbNewBus] SET  MULTI_USER 
GO
ALTER DATABASE [dbNewBus] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [dbNewBus] SET DB_CHAINING OFF 
GO
ALTER DATABASE [dbNewBus] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [dbNewBus] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [dbNewBus] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'dbNewBus', N'ON'
GO
ALTER DATABASE [dbNewBus] SET QUERY_STORE = OFF
GO
USE [dbNewBus]
GO
/****** Object:  Table [dbo].[tblAdmin]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblAdmin](
	[AdminId] [int] NOT NULL,
	[EmailId] [varchar](40) NULL,
	[username] [varchar](30) NULL,
	[Password_] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[AdminId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblBooking]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblBooking](
	[Source_B] [varchar](30) NOT NULL,
	[Destination_B] [varchar](30) NOT NULL,
	[StartDate] [varchar](15) NOT NULL,
	[StartTime] [varchar](20) NOT NULL,
	[TicketType] [varchar](20) NOT NULL,
	[TravelFare] [real] NOT NULL,
	[CustUsername] [varchar](40) NULL,
	[EmailId] [nvarchar](25) NULL,
	[BusNo] [varchar](15) NULL,
	[SelectedSeats] [nvarchar](40) NULL,
	[paymentBy] [varchar](20) NULL,
	[bookingID] [int] IDENTITY(1,1) NOT NULL,
	[paymentId]  AS ('P'+right('00000000'+CONVERT([varchar](8),[bookingID]),(8))) PERSISTED NOT NULL,
	[CancellationBit] [varchar](1) NULL,
PRIMARY KEY CLUSTERED 
(
	[bookingID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblBus]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblBus](
	[BusNo] [varchar](15) NOT NULL,
	[NoOfSeats] [int] NOT NULL,
	[Source_] [varchar](25) NOT NULL,
	[Destination] [varchar](25) NOT NULL,
	[ViaStop] [varchar](25) NOT NULL,
	[StartTime] [varchar](20) NOT NULL,
	[EndTime] [varchar](20) NOT NULL,
	[PerSeatCost] [real] NOT NULL,
	[BusType] [bit] NOT NULL,
	[BusName] [nvarchar](50) NULL,
	[Availableseats] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[BusNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblCancellation]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblCancellation](
	[PaymentId] [varchar](9) NULL,
	[Refund] [real] NULL,
	[Id_] [int] IDENTITY(1,1) NOT NULL,
	[bookingID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id_] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblCustomer]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblCustomer](
	[Index_] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](40) NOT NULL,
	[Fname] [varchar](30) NULL,
	[Lname] [varchar](30) NULL,
	[Password_] [varchar](20) NULL,
	[EmailId] [nvarchar](40) NULL,
	[ContactNo] [varchar](20) NULL,
	[Address] [nvarchar](50) NULL,
	[DOB] [date] NULL,
	[Gender] [varchar](10) NULL,
	[WalletDetails] [real] NULL,
PRIMARY KEY CLUSTERED 
(
	[username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblFeedback]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblFeedback](
	[Id_] [int] IDENTITY(1,1) NOT NULL,
	[Question1] [int] NULL,
	[Question2] [int] NULL,
	[Question3] [int] NULL,
	[Question4] [int] NULL,
	[Question5] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id_] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblReturnTicket]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblReturnTicket](
	[Return_data] [varchar](10) NULL,
	[Return_Time] [varchar](10) NULL,
	[Id_] [int] IDENTITY(1,1) NOT NULL,
	[bookingID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id_] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[tblAdmin] ([AdminId], [EmailId], [username], [Password_]) VALUES (101, N'admin1@gmail.com', N'admin1', N'welcome')
INSERT [dbo].[tblAdmin] ([AdminId], [EmailId], [username], [Password_]) VALUES (102, N'admin2@gmail.com', N'admin2', N'hello')
INSERT [dbo].[tblAdmin] ([AdminId], [EmailId], [username], [Password_]) VALUES (103, N'admin3@gmail.com', N'admin3', N'123456')
INSERT [dbo].[tblAdmin] ([AdminId], [EmailId], [username], [Password_]) VALUES (104, N'admin4@gmail.com', N'admin4', N'morning')
GO
SET IDENTITY_INSERT [dbo].[tblBooking] ON 

INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'mumbai', N'goa', N'2020-12-10', N'12:00:00', N'1', 800, N'dharmi09', NULL, N'MH 05 XY 1500', N'["01A","01B"]', NULL, 1, N'1')
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-10', N'05:00:00', N'OneWay', 800, N'dharmi09', NULL, N'MH 05 XY 1500', N'["01A","01B"]', NULL, 2, N'1')
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-10', N'06:00:00', N'OneWay', 1400, N'dharmi09', NULL, N'MH 04 JK 1700', N'["01E","01D"]', N'Credit Card', 3, N'1')
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-03', N'12:00:00', N'TwoWay', 200, N'dharmi09', NULL, N'MH 04 MN 8900', N'["01A"]', N'Debit Card', 4, N'0')
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-09', N'06:00:00', N'OneWay', 1400, N'dharmi09', NULL, N'MH 04 JK 1700', N'["01A","01B"]', N'Credit Card', 5, N'0')
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-15', N'05:00:00', N'TwoWay', 800, N'dharmi09', NULL, N'MH 05 XY 1500', N'["01A","01B"]', N'Credit Card', 6, N'1')
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-09', N'06:00:00', N'TwoWay', 1400, N'dharmi09', NULL, N'MH 04 JK 1700', N'["01A","01B"]', N'Credit Card', 7, N'0')
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-10', N'06:00:00', N'OneWay', 1400, N'dharmi09', NULL, N'MH 04 JK 1700', N'["01A","01B"]', N'Credit Card', 8, N'0')
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-10', N'12:00:00', N'OneWay', 800, N'dharmi09', NULL, N'MH 04 MN 8900', N'["01A","01B","05E","05D"]', N'Credit Card', 9, N'1')
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-17', N'12:00:00', N'OneWay', 400, NULL, N'[object Object]', N'MH 04 MN 8900', N'["01A","01B"]', NULL, 11, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-25', N'05:00:00', N'OneWay', 800, NULL, N'jumandas@rocketmail.com', N'MH 05 XY 1500', N'["01A","03B"]', N'Credit Card', 12, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-09', N'12:00:00', N'OneWay', 600, NULL, N'jumandas@rocketmail.com', N'MH 04 MN 8900', N'["08A","08B","08C"]', N'Debit Card', 13, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-25', N'12:00:00', N'OneWay', 600, NULL, N'jumandas@rocketmail.com', N'MH 04 MN 8900', N'["08A","08B","08C"]', N'Credit Card', 14, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-24', N'12:00:00', N'OneWay', 200, NULL, N'ronak1@gmail.com', N'MH 04 MN 8900', N'["01C"]', N'Credit Card', 15, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Indore', N'2020-12-11', N'07:00:00', N'OneWay', 300, NULL, N'jumandas@rocketmail.com', N'MH 05 XY 2020', N'["01A"]', N'Credit Card', 16, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-17', N'06:00:00', N'OneWay', 2100, NULL, N'Ishwarya@gmail.com', N'MH 04 JK 1700', N'["10D","09C","07B"]', N'Credit Card', 17, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-17', N'12:00:00', N'OneWay', 600, N'dharmi09', NULL, N'MH 04 MN 8900', N'["09A","09B","09C"]', N'Wallet', 18, N'1')
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-18', N'12:00:00', N'OneWay', 200, N'dharmi09', NULL, N'MH 04 MN 8900', N'["12D"]', N'Credit Card', 19, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-11', N'12:00:00', N'null', 200, NULL, NULL, N'MH 04 MN 8900', N'["09B"]', NULL, 20, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-10', N'06:00:00', N'null', 700, NULL, NULL, N'MH 04 JK 1700', N'["06E"]', NULL, 21, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-10', N'06:00:00', N'null', 700, NULL, NULL, N'MH 04 JK 1700', N'["06C"]', NULL, 22, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-11', N'06:00:00', N'null', 700, NULL, NULL, N'MH 04 JK 1700', N'["06D"]', NULL, 23, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-17', N'05:00:00', N'null', 400, NULL, NULL, N'MH 05 XY 1500', N'["05A"]', NULL, 24, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-11', N'06:00:00', N'null', 700, NULL, NULL, N'MH 04 JK 1700', N'["07C"]', NULL, 25, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-11', N'12:00:00', N'null', 200, NULL, NULL, N'MH 04 MN 8900', N'["06E"]', NULL, 26, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-12', N'06:00:00', N'null', 700, NULL, NULL, N'MH 04 JK 1700', N'["06D"]', NULL, 27, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Indore', N'2020-12-12', N'07:00:00', N'null', 600, N'dharmi09', NULL, N'MH 05 XY 2020', N'["02A","02B"]', N'Credit Card', 28, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-17', N'12:00:00', N'null', 600, NULL, NULL, N'MH 04 MN 8900', N'["08A","08B","08C"]', NULL, 29, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-17', N'12:00:00', N'null', 600, N'dharmi11', NULL, N'MH 04 MN 8900', N'["03A","03B","03C"]', N'Credit Card', 30, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-12', N'06:00:00', N'null', 1400, NULL, NULL, N'MH 04 JK 1700', N'["01A","01B"]', NULL, 31, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-24', N'12:00:00', N'null', 400, N'dharmi09', NULL, N'MH 04 MN 8900', N'["10C","10B"]', N'Credit Card', 32, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-25', N'12:00:00', N'null', 600, NULL, N'dharmi14@gmail.com', N'MH 04 MN 8900', N'["06A","06B","06C"]', N'Credit Card', 33, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-11', N'06:00:00', N'null', 700, NULL, N'dharmimehta13@gmail.com', N'MH 04 JK 1700', N'["03C"]', N'Debit Card', 34, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-17', N'12:00:00', N'null', 600, NULL, N'dharmimehta13@gmail.com', N'MH 04 MN 8900', N'["07A","07B","07C"]', N'Debit Card', 35, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-17', N'12:00:00', N'null', 600, NULL, N'dharmi13@gmail.com', N'MH 04 MN 8900', N'["07A","07B","07C"]', N'Credit Card', 36, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-17', N'12:00:00', N'null', 800, NULL, N'dharmi13@gmail.com', N'MH 04 MN 8900', N'["04A","04B","04C","04D"]', N'Credit Card', 37, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-18', N'05:00:00', N'null', 2000, NULL, N'ronak77@gmail.com', N'MH 05 XY 1500', N'["04A","04B","04C","04D","04E"]', N'Credit Card', 38, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-12', N'12:00:00', N'null', 400, N'dharmi09', NULL, N'MH 04 MN 8900', N'["03A","03B"]', N'Credit Card', 39, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-12', N'12:00:00', N'null', 400, NULL, N'gunjan@gmail.com', N'MH 04 MN 8900', N'["04E","05E"]', N'Debit Card', 40, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-17', N'12:00:00', N'null', 600, NULL, N'dharmi13@gmail.com', N'MH 04 MN 8900', N'["06A","06B","06C"]', N'Credit Card', 41, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-25', N'12:00:00', N'null', 600, N'dharmi09', NULL, N'MH 04 MN 8900', N'["08A","08B","08C"]', N'Debit Card', 42, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-17', N'05:00:00', N'null', 800, N'dharmi09', NULL, N'MH 05 XY 1500', N'["06D","06E"]', NULL, 43, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Goa', N'2020-12-17', N'06:00:00', N'null', 2100, NULL, N'dharmi13@gmail.com', N'MH 04 JK 1700', N'["06A","06B","06C"]', N'Credit Card', 44, NULL)
INSERT [dbo].[tblBooking] ([Source_B], [Destination_B], [StartDate], [StartTime], [TicketType], [TravelFare], [CustUsername], [EmailId], [BusNo], [SelectedSeats], [paymentBy], [bookingID], [CancellationBit]) VALUES (N'Mumbai', N'Pune', N'2020-12-12', N'12:00:00', N'null', 400, NULL, N'dharmi13@gmail.com', N'MH 04 MN 8900', N'["05C","05B"]', N'Credit Card', 45, NULL)
SET IDENTITY_INSERT [dbo].[tblBooking] OFF
GO
INSERT [dbo].[tblBus] ([BusNo], [NoOfSeats], [Source_], [Destination], [ViaStop], [StartTime], [EndTime], [PerSeatCost], [BusType], [BusName], [Availableseats]) VALUES (N'MH 02 XX 4545', 60, N'Pune', N'Goa', N'Panvel', N'07:00:00', N'13:00:00', 350, 1, N'SRS Travels', 60)
INSERT [dbo].[tblBus] ([BusNo], [NoOfSeats], [Source_], [Destination], [ViaStop], [StartTime], [EndTime], [PerSeatCost], [BusType], [BusName], [Availableseats]) VALUES (N'MH 03 YY 2434', 60, N'Mumbai', N'Indore', N'Nashik', N'09:00:00', N'14:00:00', 250, 1, N'Mohan travels', 60)
INSERT [dbo].[tblBus] ([BusNo], [NoOfSeats], [Source_], [Destination], [ViaStop], [StartTime], [EndTime], [PerSeatCost], [BusType], [BusName], [Availableseats]) VALUES (N'MH 04 JK 1700', 60, N'Mumbai', N'Goa', N'Karjat', N'06:00:00', N'15:00:00', 700, 1, N'Jolly Travels', 56)
INSERT [dbo].[tblBus] ([BusNo], [NoOfSeats], [Source_], [Destination], [ViaStop], [StartTime], [EndTime], [PerSeatCost], [BusType], [BusName], [Availableseats]) VALUES (N'MH 04 MN 8900', 60, N'Mumbai', N'Pune', N'Karjat', N'12:00:00', N'16:00:00', 200, 1, N'Royal Travels', 40)
INSERT [dbo].[tblBus] ([BusNo], [NoOfSeats], [Source_], [Destination], [ViaStop], [StartTime], [EndTime], [PerSeatCost], [BusType], [BusName], [Availableseats]) VALUES (N'MH 05 CN 7895', 60, N'Ahemdabad', N'Mumbai', N'Vasai', N'05:00:00', N'20:00:00', 900, 1, N'Rajdhani Travels', 60)
INSERT [dbo].[tblBus] ([BusNo], [NoOfSeats], [Source_], [Destination], [ViaStop], [StartTime], [EndTime], [PerSeatCost], [BusType], [BusName], [Availableseats]) VALUES (N'MH 05 GX 1423', 60, N'Mumbai', N'Rajkot', N'Vasai', N'06:00:00', N'20:00:00', 600, 1, N'Eagle Express', 60)
INSERT [dbo].[tblBus] ([BusNo], [NoOfSeats], [Source_], [Destination], [ViaStop], [StartTime], [EndTime], [PerSeatCost], [BusType], [BusName], [Availableseats]) VALUES (N'MH 05 XY 1500', 60, N'Mumbai', N'Goa', N'Panvel', N'05:00:00', N'13:00:00', 400, 1, N'Orange Bus Express', 56)
INSERT [dbo].[tblBus] ([BusNo], [NoOfSeats], [Source_], [Destination], [ViaStop], [StartTime], [EndTime], [PerSeatCost], [BusType], [BusName], [Availableseats]) VALUES (N'MH 05 XY 2020', 60, N'Mumbai', N'Indore', N'Pune', N'07:00:00', N'12:00:00', 300, 1, N'Bhagham bhag express', 60)
GO
SET IDENTITY_INSERT [dbo].[tblCustomer] ON 

INSERT [dbo].[tblCustomer] ([Index_], [username], [Fname], [Lname], [Password_], [EmailId], [ContactNo], [Address], [DOB], [Gender], [WalletDetails]) VALUES (1, N'dharmi09', N'Dharmi', N'Mehta', N'dharmi123', N'dharmimehta13@gmail.com', N'9702889956', N'A/15,ghatkopar', CAST(N'2009-05-12' AS Date), N'Female', 16305)
INSERT [dbo].[tblCustomer] ([Index_], [username], [Fname], [Lname], [Password_], [EmailId], [ContactNo], [Address], [DOB], [Gender], [WalletDetails]) VALUES (4, N'dharmi11', N'dharmi', N'mehta', N'dharmi12', N'dharmimehta13@gmail.com', N'8989739323', N'A/15,plot no 191,mayur jyoti', NULL, NULL, NULL)
INSERT [dbo].[tblCustomer] ([Index_], [username], [Fname], [Lname], [Password_], [EmailId], [ContactNo], [Address], [DOB], [Gender], [WalletDetails]) VALUES (3, N'gunjan', N'Gunjan', N'Lund', N'gunjan', N'xyz@gmail.com', N'9876789998', N'A/15,ghatkopar', CAST(N'2020-11-05' AS Date), N'Female', 0)
INSERT [dbo].[tblCustomer] ([Index_], [username], [Fname], [Lname], [Password_], [EmailId], [ContactNo], [Address], [DOB], [Gender], [WalletDetails]) VALUES (2, N'max95', N'max', N'doe', N'maxdoe', N'maxdoe@gmail.com', N'12345', N'A/17,panvel', CAST(N'1998-01-07' AS Date), N'male', 400)
SET IDENTITY_INSERT [dbo].[tblCustomer] OFF
GO
SET IDENTITY_INSERT [dbo].[tblFeedback] ON 

INSERT [dbo].[tblFeedback] ([Id_], [Question1], [Question2], [Question3], [Question4], [Question5]) VALUES (1, 1, 2, 3, 4, 5)
INSERT [dbo].[tblFeedback] ([Id_], [Question1], [Question2], [Question3], [Question4], [Question5]) VALUES (2, 5, 5, 5, 5, 5)
SET IDENTITY_INSERT [dbo].[tblFeedback] OFF
GO
ALTER TABLE [dbo].[tblBooking] ADD  CONSTRAINT [cancel_bit]  DEFAULT ('0') FOR [CancellationBit]
GO
ALTER TABLE [dbo].[tblBus] ADD  CONSTRAINT [bustype]  DEFAULT ((1)) FOR [BusType]
GO
ALTER TABLE [dbo].[tblBus] ADD  CONSTRAINT [Availableseats]  DEFAULT ((60)) FOR [Availableseats]
GO
ALTER TABLE [dbo].[tblCustomer] ADD  CONSTRAINT [Wal_detail]  DEFAULT ((0)) FOR [WalletDetails]
GO
ALTER TABLE [dbo].[tblBooking]  WITH CHECK ADD FOREIGN KEY([BusNo])
REFERENCES [dbo].[tblBus] ([BusNo])
GO
ALTER TABLE [dbo].[tblBooking]  WITH CHECK ADD FOREIGN KEY([CustUsername])
REFERENCES [dbo].[tblCustomer] ([username])
GO
ALTER TABLE [dbo].[tblCancellation]  WITH CHECK ADD FOREIGN KEY([bookingID])
REFERENCES [dbo].[tblBooking] ([bookingID])
GO
ALTER TABLE [dbo].[tblReturnTicket]  WITH CHECK ADD FOREIGN KEY([bookingID])
REFERENCES [dbo].[tblBooking] ([bookingID])
GO
/****** Object:  StoredProcedure [dbo].[Betweentwodates]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create Proc [dbo].[Betweentwodates]
@StartDate varchar(25), @EndDate varchar(25)
AS
Begin
select * from tblBooking where StartDate between @StartDate and @EndDate
end
GO
/****** Object:  StoredProcedure [dbo].[BUS_SEARCH]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[BUS_SEARCH]
@Source_ varchar(25),@Destination varchar(25)
as
begin 
select BusNo,BusName,Source_,Destination,NoOfSeats,StartTime,EndTime,ViaStop,PerSeatCost,Availableseats from tblBus where Source_=@Source_ AND Destination=@Destination
end
GO
/****** Object:  StoredProcedure [dbo].[Fetch_paymentid]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[Fetch_paymentid]      
@bookingID int    
AS      
BEGIN      
SELECT paymentId FROM tblBooking WHERE bookingID=@bookingID      
END
GO
/****** Object:  StoredProcedure [dbo].[fetchpaymentbyemail]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[fetchpaymentbyemail]
@Source_B varchar(30),@Destination_B varchar(30),@StartDate varchar(15),@StartTime varchar(20),@TicketType varchar(20),@TravelFare float(4),@EmailId nvarchar(40)
as
begin
select paymentId FROM tblBooking where @Source_B=Source_B AND @Destination_B=Destination_B AND @StartDate=StartDate AND @StartTime=StartTime AND @TicketType=TicketType AND @TravelFare=@TravelFare AND @EmailId=EmailId 
end
GO
/****** Object:  StoredProcedure [dbo].[fetchpaymentbyemail1]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[fetchpaymentbyemail1]
@Source_B varchar(30),@Destination_B varchar(30),@StartDate varchar(15),@StartTime varchar(20),@TravelFare float(4),@EmailId nvarchar(40)
as
begin
select paymentId FROM tblBooking where @Source_B=Source_B AND @Destination_B=Destination_B AND @StartDate=StartDate AND @StartTime=StartTime AND @TravelFare=@TravelFare AND @EmailId=EmailId 
end
GO
/****** Object:  StoredProcedure [dbo].[fetchpaymentid]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[fetchpaymentid]      
@Username varchar(40)   
AS      
BEGIN      
SELECT paymentId FROM tblBooking WHERE CustUsername=@Username    
END
GO
/****** Object:  StoredProcedure [dbo].[FrequentlyTravel]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[FrequentlyTravel]
AS
Begin
select Source_B, Destination_B, count(*) as total_count from tblBooking group by Source_B, Destination_B order by total_count
END
GO
/****** Object:  StoredProcedure [dbo].[RefundNew]    Script Date: 09-12-2020 23:12:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[RefundNew] 
@paymentid varchar(20)
as
begin
select TravelFare-0.10*TravelFare as 'Refund Amount' from tblBooking where paymentId = @paymentid
end
GO
USE [master]
GO
ALTER DATABASE [dbNewBus] SET  READ_WRITE 
GO
