dotnet ef dbcontext scaffold Name=ConnectionStrings:Yarrow Npgsql.EntityFrameworkCore.PostgreSQL -o Yarrow.Data --context YarrowContext --force
dotnet ef dbcontext scaffold Name=ConnectionStrings:Calla Npgsql.EntityFrameworkCore.PostgreSQL -o Calla.Data --context CallaContext --force