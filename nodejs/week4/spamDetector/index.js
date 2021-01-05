class Email {
    constructor(subject, body) {
        this.subject = subject;
        this.body = body;
    }
}

class SpamDetector {
    filterBasedOnUpperCaseCharacters(email) {
        const bodyOfMail = email.body;
        const splitBodyOfMail = bodyOfMail.split(' ')
        const result = splitBodyOfMail.filter(item => item == item.toUpperCase())
        const percentage = (result.length * 100) / splitBodyOfMail.length
        if (percentage > 60) {
            return true
        }
        return false

    }
    filterBasedOnWords(email) {
        const spamWords = ['viagra', 'offer', 'free']
        const bodyOfMail = email.body;
        const splitBodyOfMail = bodyOfMail.split(' ')
        const result = splitBodyOfMail.some(item => spamWords.includes(item.toLowerCase()))
        return result;
    }
    filterBasedOnWordHello(email) {
        const subjectOfMail = email.subject.toLowerCase();
        return subjectOfMail === 'hello';
    }
    isSpam(email) {
        if (this.filterBasedOnWords(email) || this.filterBasedOnWordHello(email) || this.filterBasedOnUpperCaseCharacters(email)) {
            return true
        }
        return false
    }
}
const emailFromOldFriend = new Email("Hello friend", "Long time no see, when should we hang out again??");
const emailFromFraud = new Email("Dear customer", "Get free health insurance for just 99dkk");
const emailFromCheater = new Email("Hello", "You have won one free gift");

const spamDetector = new SpamDetector();
console.log(spamDetector.isSpam(emailFromOldFriend));
console.log(spamDetector.isSpam(emailFromFraud));
console.log(spamDetector.isSpam(emailFromCheater));