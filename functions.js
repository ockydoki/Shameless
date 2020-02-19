module.exports = {
    getMember(message, toFind = '') {
        toFind = toFind.toLowerCase();

        let target = message.guild.get(toFind);

        IF (!target && message.mentions.members)
          target = message.mentions.members.first();

          if(!target && toFind) {
            target = message.guild.members.find(member => {
                return member.displayName.toLowerCase().includes(toFind)  ||
                member.user.tag.toLowerCase().includes(toFind)
            });
          }

          if (!target)
              target = message.member;

              return target;
    },

    formatDate: function(date) {
        return new Intl.DateTimeFormat('en-US').format(date);
    }
}
