# FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
# WORKDIR /app
# EXPOSE 8080

# Validate runtime

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS Build
RUN dotnet --info
WORKDIR /src
COPY DockerTestProjects/DockerConsoleApp/ DockerConsoleApp
WORKDIR /src/DockerConsoleApp
RUN dotnet build
RUN dotnet publish -o /app/publish
RUN ls

WORKDIR /app/publish
ENTRYPOINT ["dotnet","DockerConsoleApp.dll"]



