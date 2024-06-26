﻿using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class ClientFeedback : Entity<Guid>
    {
        [ForeignKey("Project")]
        public Guid ProjectId { get; set; }
        public virtual Project? Project { get; set; }
        public FeedbackType FeedbackType { get; set; }
        public DateTime DateReceived { get; set; }
        public string DetailedFeedback { get; set; }
        public string ActionTaken { get; set; }
        public DateTime ClosureDate { get; set; }
    }
}