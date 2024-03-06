using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Promact.CustomerSuccess.Platform.Migrations
{
    /// <inheritdoc />
    public partial class tbl2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "PhaseMilestonesId",
                table: "Sprints",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "ProjectsId",
                table: "PhaseMilestones",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Sprints_PhaseMilestonesId",
                table: "Sprints",
                column: "PhaseMilestonesId");

            migrationBuilder.CreateIndex(
                name: "IX_PhaseMilestones_ProjectsId",
                table: "PhaseMilestones",
                column: "ProjectsId");

            migrationBuilder.AddForeignKey(
                name: "FK_PhaseMilestones_Projects_ProjectsId",
                table: "PhaseMilestones",
                column: "ProjectsId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Sprints_PhaseMilestones_PhaseMilestonesId",
                table: "Sprints",
                column: "PhaseMilestonesId",
                principalTable: "PhaseMilestones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PhaseMilestones_Projects_ProjectsId",
                table: "PhaseMilestones");

            migrationBuilder.DropForeignKey(
                name: "FK_Sprints_PhaseMilestones_PhaseMilestonesId",
                table: "Sprints");

            migrationBuilder.DropIndex(
                name: "IX_Sprints_PhaseMilestonesId",
                table: "Sprints");

            migrationBuilder.DropIndex(
                name: "IX_PhaseMilestones_ProjectsId",
                table: "PhaseMilestones");

            migrationBuilder.DropColumn(
                name: "PhaseMilestonesId",
                table: "Sprints");

            migrationBuilder.DropColumn(
                name: "ProjectsId",
                table: "PhaseMilestones");
        }
    }
}
