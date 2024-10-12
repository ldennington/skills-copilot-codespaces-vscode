function skillsMember()
{
    var member = {
        skills: [],
        addSkill: function(skill)
        {
            if (!this.skills.includes(skill))
            {
                this.skills.push(skill);
            }
        },
        removeSkill: function(skill)
        {
            const index = this.skills.indexOf(skill);
            if (index > -1)
            {
                this.skills.splice(index, 1);
            }
        }
    }

    return member;
}