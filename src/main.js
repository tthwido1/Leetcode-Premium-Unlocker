
import { CompaniesProblemUnlocker } from "./modules/Unlocker/CompaniesProblemUnlocker";
import { ProblemFrequncyUnlocker } from "./modules/Unlocker/ProblemsFrequencyUnlocker";

function evaluate(dataObj) { 
    for(const url in dataObj) { 
        if (window.location.href.includes(url)) { 
            let unlockers = dataObj[url]
            for(let i =0; i <= unlockers.length -1; i ++) { 
                try { 
                    let unlocker = new unlockers[i]()
                    unlocker.unlock()
                }
                catch (e) { 
                    console.log(unlockers[i].constructor.name + " Error " + e)
                }
            }
            break; 
        }
    }
}

function main() {
    let urls = {
        "https://leetcode.com/problemset": [ProblemFrequncyUnlocker, CompaniesProblemUnlocker], 
        "https://leetcode.com/problem-list": [ProblemFrequncyUnlocker]
    }
    evaluate(urls)
}

main()