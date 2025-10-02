import { useEffect, useState } from "react";
import {
  CommandDisplay,
  LoadingMessage,
  LogoMongodb,
  LogoMysql,
  LogoPostgres,
  MethodButton,
  MethodContainer,
  ProductBar,
  ProductContainer,
  ProductTitleContainer,
  Spinner,
  StyleBlocConnection,
  StyledDot,
  StyleServer,
  StyleServerDetailLine1,
  StyleServerDetailLine2,
  StyleServerDetailLine2Ip,
  StyleServerDetailsBloc,
  StyleServerDetailsColunm,
  StyleStatus,
  StyleStatusServerDetailLine2,
  StyleVersion,
  Table,
  TableCell,
  ButtonMessage,
  TableHeader,
  TogglePasswordButton,
} from "../Style";
import { MessageSquare } from 'lucide-react';

const ItGalaxyDatabaseProduct = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const password = props.data.details.RESSOURCE_PASSWORD;

  const [aws_details, setAws_details] = useState(
    JSON.parse(props.data.aws_details.body)
  );
  const [ip_public, setIp_public] = useState(
    aws_details?.PUBLIC_IP?.[0] || "Pending"
  );
 
  
  const getTagValue = (tags, key) => {
    const tag = tags?.find((tag) => tag.key === key);
    return tag ? tag.value : null;
  };


  const state = aws_details?.TASK_STATES?.[0] || "Pending";
  const stateService = getTagValue(aws_details?.TAGS, "STOPPED");
  const createdat = getTagValue(aws_details?.TAGS, "DATE_CREATION");
  const turnoff = getTagValue(aws_details?.TAGS, "TURN_OFF");



  useEffect(() => {
    if (ip_public === "Pending" || state==='PROVISIONING'  || state ==='PENDING') {
      const timer = setInterval(() => {
        props.refetch();
        const newAwsDetails = JSON.parse(props.data.aws_details.body);
        setAws_details(newAwsDetails);
        setIp_public(newAwsDetails?.PUBLIC_IP?.[0] || "Pending");
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [ip_public, state, props.data.aws_details, props.refetch]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const commands = [
    {
      mysql_cli: `mysql -u ${props.data.details.RESSOURCE_USERNAME} -p -h ${ip_public} -D ${props.data.details.RESSOURCE_DATABASE_NAME}`,
      mysql_nodejs: `const mysql = require('mysql');
const connection = mysql.createConnection({
host: '${ip_public}',
user: '${props.data.details.RESSOURCE_USERNAME}',
password: '*****',
database: '${props.data.details.RESSOURCE_DATABASE_NAME}'
});
                `,
      mysql_python: `import mysql.connector
from mysql.connector import Error

    try:
      connection = mysql.connector.connect(
      host='${ip_public}',
      user='${props.data.details.RESSOURCE_USERNAME}',
      password='********',
      database='${props.data.details.RESSOURCE_DATABASE_NAME}'
      )
                `,

      postgres_cli: `psql -U ${props.data.details.RESSOURCE_USERNAME} -h ${ip_public} -d ${props.data.details.RESSOURCE_DATABASE_NAME}`,
      postgres_nodejs: `const { Client } = require('pg');
const client = new Client({
    host: '${ip_public}',
    user: '${props.data.details.RESSOURCE_USERNAME}',
    password: '*********',
    database: '${props.data.details.RESSOURCE_DATABASE_NAME}',
    port: 5432, // Default port
});`,
      postgres_python: `import psycopg2
from psycopg2 import OperationalError
 def create_connection():
     connection = None
        try:
          connection = psycopg2.connect(
          host='${ip_public}',
          user='${props.data.details.RESSOURCE_USERNAME}',
          password='**********',
          database='${props.data.details.RESSOURCE_DATABASE_NAME}'
             )
      print('Connected to PostgreSQL')
      except OperationalError as e:
      print(f'Error: {e}')
      return connection
      `,
      mongodb_cli: `mongo --host ${ip_public} --port 27017 -u ${props.data.details.RESSOURCE_USERNAME} -p myPassword ${props.data.details.RESSOURCE_DATABASE_NAME}`,
      mongodb_nodejs: `const { MongoClient } = require('mongodb'); 
const uri = "mongodb://${props.data.details.RESSOURCE_USERNAME}:your_password@${ip_public}:27017/${props.data.details.RESSOURCE_DATABASE_NAME}"; // Replace with your connection string
const client = new MongoClient(uri);

async function run() {
  try {
     await client.connect();
     console.log("Connected to MongoDB");
                    
     const database = client.db('${props.data.details.RESSOURCE_DATABASE_NAME}'); // Use your database name
     // Perform actions on the collection here
 } catch (err) {
     console.error("Connection error:", err);
         
    } finally {
     await client.close();
    }
}`,
      mongodb_python: `from pymongo import MongoClient
from pymongo.errors import ConnectionError
 try:
  # Replace with your connection string
  client = MongoClient("mongodb://${props.data.details.RESSOURCE_USERNAME}:your_password@${ip_public}:27017/${props.data.details.RESSOURCE_DATABASE_NAME}")
                    
  # Check if the connection was successful
  print("Connected to MongoDB")
                    
  db = client['${props.data.details.RESSOURCE_DATABASE_NAME}']
                `,
    },
  ];

  const [command, setCommand] = useState(commands[0].mysql_cli); // Default to MySQL CLI command


  useEffect(() => {
    // Set the default command based on the database type
    switch (props.data.details.TYPE) {
      case "mysql":
        setCommand(commands[0].mysql_cli); // MySQL command
        break;
      case "postgres":
        setCommand(commands[0].postgres_cli); // PostgreSQL command
        break;
      case "mongodb":
        setCommand(commands[0].mongodb_cli); // MongoDB command
        break;
      default:
        setCommand(commands[0].mysql_cli); // Default to MySQL command if the type is unknown
    }
  }, [props.data.details.TYPE, state, ip_public]);

  const handleClick = (method) => {
    setCommand(commands[method]);
  };

  return (
    <StyleServer>
        <ProductBar>
          <ProductTitleContainer>
            <p
              style={{
                fontWeight: "501",
                fontSize: "40px",
                color: "white",
                fontFamily: "Inter",
                margin: 0,
              }}
            >
              Welcome to your Database Dashboard{" "}
            </p>
          </ProductTitleContainer>
        </ProductBar>


      <hr />
      <StyleServerDetailsBloc>
        <StyleServerDetailsColunm>
          <StyleServerDetailLine1>Status</StyleServerDetailLine1>
          <StyleStatus>
            <StyleStatusServerDetailLine2
              isActive={stateService === "false"}
            >
              {state === "Pending" ? (
                <LoadingMessage>Pending</LoadingMessage>
              ) : stateService === "false" ? (
                aws_details?.TASK_STATES?.[0]
              ) : (
                "STOPPED"
              )}
            </StyleStatusServerDetailLine2>
            <StyledDot isActive={state === "RUNNING"} />
            </StyleStatus>
        </StyleServerDetailsColunm>

        <StyleServerDetailsColunm>
          <StyleServerDetailLine1>Created At </StyleServerDetailLine1>
          <StyleServerDetailLine2>
            {stateService === "false"
              ? createdat
              : "-"}
          </StyleServerDetailLine2>
        </StyleServerDetailsColunm>

        <StyleServerDetailsColunm>
          <StyleServerDetailLine1> Turn off at </StyleServerDetailLine1>
          <StyleServerDetailLine2>
            {" "}
            {stateService === "false"
              ? turnoff
              : "-"}
          </StyleServerDetailLine2>
        </StyleServerDetailsColunm>

        <StyleServerDetailsColunm>
          <StyleServerDetailLine1>Public Address</StyleServerDetailLine1>
          <StyleServerDetailLine2Ip>
            {stateService === "true" ? (
              "-"
            ) : ip_public === "Pending" ? (
              <LoadingMessage>Pending</LoadingMessage>
            ) : (
              ip_public
            )}
          </StyleServerDetailLine2Ip>
        </StyleServerDetailsColunm>

        <StyleServerDetailsColunm>
          <StyleServerDetailLine1>Password</StyleServerDetailLine1>
          <StyleServerDetailLine2>
            {isPasswordVisible ? password : "••••••••"}{" "}
            {/* Display password or dots */}
            <TogglePasswordButton onClick={togglePasswordVisibility}>
              {isPasswordVisible ? "👁️" : "👁️‍🗨️"}
            </TogglePasswordButton>
          </StyleServerDetailLine2>
        </StyleServerDetailsColunm>
        <StyleServerDetailsColunm>
          <StyleServerDetailLine1 > Contact Support </StyleServerDetailLine1>
          <ButtonMessage onClick={props.setShowModalSupport} >
             Send a message <MessageSquare />
          </ButtonMessage>
        </StyleServerDetailsColunm>
      </StyleServerDetailsBloc>
      <hr />

      <StyleBlocConnection>
        <StyleServerDetailLine1> Database Connection : </StyleServerDetailLine1>
        <Table>
          <thead>
            <tr>
              <TableHeader colSpan={2}>
                <MethodContainer>
                  <MethodButton
                    isSelected={
                      command === commands[0][`${props.data.details.TYPE}_cli`]
                    }
                    onClick={() =>
                      setCommand(commands[0][`${props.data.details.TYPE}_cli`])
                    }
                  >
                    CLI
                  </MethodButton>
                  <MethodButton
                    isSelected={
                      command ===
                      commands[0][`${props.data.details.TYPE}_nodejs`]
                    }
                    onClick={() =>
                      setCommand(
                        commands[0][`${props.data.details.TYPE}_nodejs`]
                      )
                    }
                  >
                    Node.js
                  </MethodButton>
                  <MethodButton
                    isSelected={
                      command ===
                      commands[0][`${props.data.details.TYPE}_python`]
                    }
                    onClick={() =>
                      setCommand(
                        commands[0][`${props.data.details.TYPE}_python`]
                      )
                    }
                  >
                    Python
                  </MethodButton>
                </MethodContainer>
              </TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell colSpan={2}>
                <CommandDisplay>
                  {state === "Pending" ? <Spinner /> : <pre>{command}</pre>}
                </CommandDisplay>
              </TableCell>
            </tr>
          </tbody>
        </Table>
      </StyleBlocConnection>
    </StyleServer>
  );
};

export default ItGalaxyDatabaseProduct;
