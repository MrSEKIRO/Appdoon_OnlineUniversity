using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Appdoon.Presistence.Migrations
{
    public partial class set_Ids_NotNull_for_ChildstepProgress : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 1,
                column: "InsertTime",
                value: new DateTime(2022, 6, 19, 15, 44, 25, 710, DateTimeKind.Local).AddTicks(4798));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 19, 15, 44, 25, 732, DateTimeKind.Local).AddTicks(7357));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 19, 15, 44, 25, 732, DateTimeKind.Local).AddTicks(7997));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 1,
                column: "InsertTime",
                value: new DateTime(2022, 6, 19, 15, 43, 16, 710, DateTimeKind.Local).AddTicks(4007));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 2,
                column: "InsertTime",
                value: new DateTime(2022, 6, 19, 15, 43, 16, 721, DateTimeKind.Local).AddTicks(346));

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 3,
                column: "InsertTime",
                value: new DateTime(2022, 6, 19, 15, 43, 16, 721, DateTimeKind.Local).AddTicks(810));
        }
    }
}
