using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Promact.CustomerSuccess.Platform.Migrations
{
    /// <inheritdoc />
    public partial class tbl3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sprints_PhaseMilestones_PhaseMilestonesId",
                table: "Sprints");

            migrationBuilder.AlterColumn<Guid>(
                name: "PhaseMilestonesId",
                table: "Sprints",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AddForeignKey(
                name: "FK_Sprints_PhaseMilestones_PhaseMilestonesId",
                table: "Sprints",
                column: "PhaseMilestonesId",
                principalTable: "PhaseMilestones",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sprints_PhaseMilestones_PhaseMilestonesId",
                table: "Sprints");

            migrationBuilder.AlterColumn<Guid>(
                name: "PhaseMilestonesId",
                table: "Sprints",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Sprints_PhaseMilestones_PhaseMilestonesId",
                table: "Sprints",
                column: "PhaseMilestonesId",
                principalTable: "PhaseMilestones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
