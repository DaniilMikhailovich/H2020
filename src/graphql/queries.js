/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnswer = `query GetAnswer($id: ID!) {
  getAnswer(id: $id) {
    id
    gender
    humanName
    humanHead {
      id
      src
      posX
      posY
    }
    humanShirt {
      id
      src
      posX
      posY
    }
    humanJackets {
      id
      src
      posX
      posY
    }
    humanPants {
      id
      src
      posX
      posY
    }
    humanShoes {
      id
      src
      icon
      posX
      posY
    }
    humanAccessories {
      id
      src
      posX
      posY
    }
    hardSkillPoints
    softSkillsPoints
    hardSkillName
    Initiative
    Creativity
    Adaptability
    Reflection
    Multitasking
    ListeningSkills
    Teamwork
    CriticalThinking
    TimeManagement
  }
}
`;
export const listAnswers = `query ListAnswers(
  $filter: ModelAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      gender
      humanName
      humanHead {
        id
        src
        posX
        posY
      }
      humanShirt {
        id
        src
        posX
        posY
      }
      humanJackets {
        id
        src
        posX
        posY
      }
      humanPants {
        id
        src
        posX
        posY
      }
      humanShoes {
        id
        src
        icon
        posX
        posY
      }
      humanAccessories {
        id
        src
        posX
        posY
      }
      hardSkillPoints
      softSkillsPoints
      hardSkillName
      Initiative
      Creativity
      Adaptability
      Reflection
      Multitasking
      ListeningSkills
      Teamwork
      CriticalThinking
      TimeManagement
    }
    nextToken
  }
}
`;
