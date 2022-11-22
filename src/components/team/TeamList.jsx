import TeamMember from './TeamMember';

function TeamList() {
  return (
    <div className='grid'>
      <TeamMember
        name='Kaiara Spencer'
        ocupation='PRODUCT MANAGER'
        img='/img/p1.webp'
      />
      <TeamMember
        name='Dave Simpson'
        ocupation='PRODUCT MANAGER'
        img='/img/p2.webp'
      />
      <TeamMember
        name='Ben Thompson'
        ocupation='PRODUCT MANAGER'
        img='/img/p3.webp'
      />
      <TeamMember
        name='Kyla Stewart'
        ocupation='PRODUCT MANAGER'
        img='/img/p4.webp'
      />
      <TeamMember
        name='Kaiara Spencer'
        ocupation='PRODUCT MANAGER'
        img='/img/p1.webp'
      />
      <TeamMember
        name='Dave Simpson'
        ocupation='PRODUCT MANAGER'
        img='/img/p2.webp'
      />
    </div>
  );
}

export default TeamList;
